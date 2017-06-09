/**
 * @class Login
 */

import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    dismissKeyboard,
    TouchableWithoutFeedback
} from 'react-native'

import MenuButton from '../Components/MenuButton'
import React, {Component} from 'react'
import * as firebase from 'firebase'
import {Button, Container, Header, Content, Left, Body, Title, Form, Input, Item} from 'native-base'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import {Sae} from 'react-native-textinput-effects'
import DismissKeyboard from 'dismissKeyboard'
import PostOffice from '../lib/PostOffice'

import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      response: ''
    }

    this.po = new PostOffice()
  }

  async signup () {
    DismissKeyboard()

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

      this.setState({
        response: 'account created'
      })

      this.po.getPacket('user').email = this.state.email
    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  async login () {
    DismissKeyboard()

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

      this.setState({
        response: 'Logged In!'
      })

      this.po.getPacket('user').email = this.state.email
    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  render () {
    return (
      <Container>
        <Header>
          <MenuButton />
          <Left />
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
          <Form style={style.form}>
            <Item>
              <Input
                style={style.input}
                placeholder='Email'
                onChangeText={(text) => this.setState({email: text})}
                  />
            </Item>
            <Item>
              <Input
                style={style.input}
                placeholder='Password'
                onChangeText={(text) => this.setState({password: text})}
                secureTextEntry
                  />
            </Item>
          </Form>
          <View style={style.buttons}>
            <Button style={style.button} block onPress={() => this.login()}>
              <Text style={style.text}>Login</Text>
            </Button>
            <Button style={style.button} block onPress={() => this.signup()}>
              <Text style={style.text}>Signup</Text>
            </Button>
          </View>
          <View style={style.response}>
            <Text style={style.responseText}>{this.state.response}</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const style = {
  input: {
    marginTop: 20
  },

  buttons: {
    marginTop: 50
  },

  button: {
    marginTop: 20,
    width: '50%',
    alignSelf: 'center'
  },

  text: {
    color: 'white'
  },

  form: {
    marginTop: 50
  },

  responseText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 18
  },

  response: {
    marginTop: 50
  }

}

export default LoginScreen
