
import {
  Text,
  View,
  StyleSheet,
  dismissKeyboard,
} from 'react-native'

import { Header, Button, Input } from '../Components/Common'
import React, {Component} from 'react'
import * as firebase from 'firebase'
import DismissKeyboard from 'dismissKeyboard'
import {connect} from 'react-redux'
import * as Actions from '../Actions'
import * as Theme from '../Theme'

export class LoginScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      response: ''
    }

  }

  async signup () {
    DismissKeyboard()

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

      this.props.userCreated()

      this.setState({
        response: 'account created'
      })

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

    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Header title='Login/Signup' backButton />
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
    backgroundColor: Theme.backgroundColor,
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
    menuButtonPress: () => { dispatch(Actions.drawerOpen()) },
    userCreated: () => {dispatch(Actions.userCreated())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
