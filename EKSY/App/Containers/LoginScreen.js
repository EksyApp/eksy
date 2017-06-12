
import {
  Text,
  View,
  StyleSheet,
  dismissKeyboard,
  TouchableWithoutFeedback
} from 'react-native'

import {
    Grid,
    Row
} from 'react-native-elements'

import Header from '../Components/Header'
import MenuButton from '../Components/MenuButton'
import Button from '../Components/Button'
import Input from '../Components/Input'
import React, {Component} from 'react'
import * as firebase from 'firebase'
import DismissKeyboard from 'dismissKeyboard'
import PostOffice from '../lib/PostOffice'
import {connect} from 'react-redux'
import * as Actions from '../Actions'
import * as Theme from '../Theme'

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
      <View style={styles.container}>
        <Header title='Login/Signup' menuButtonPress={this.props.menuButtonPress} />
        <View>
          <Input
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder='user@gmail.com'
          />
        </View>
        <View>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder='your password'
            secureTextEntry
        />
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => this.login()}>
          Log in
          </Button>
          <Button onPress={() => this.signup()}>
          Sign up
          </Button>
        </View>
        <View style={styles.response}>
          <Text style={styles.responseText}>{this.state.response}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor
  },

  buttons: {
    marginTop: 50
  },

  responseText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
    color: 'white'
  },

  response: {
    marginTop: 50
  }

})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuButtonPress: () => { dispatch(Actions.drawerOpen()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
