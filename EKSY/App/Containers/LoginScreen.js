
import {
  Text,
  View,
  StyleSheet,
  dismissKeyboard,
  TouchableWithoutFeedback
} from 'react-native'

import {
    Grid,
    Row,
    FormLabel,
    FormInput
} from 'react-native-elements'

import Header from '../Components/Header'
import MenuButton from '../Components/MenuButton'
import Button from '../Components/Button'
import React, {Component} from 'react'
import * as firebase from 'firebase'
import DismissKeyboard from 'dismissKeyboard'
import PostOffice from '../lib/PostOffice'
import {connect} from 'react-redux'
import * as Actions from '../Actions'

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
      <View>
        <Header title="Login/Signup" menuButtonPress={this.props.menuButtonPress}/>
        <View>
          <FormLabel>Email</FormLabel>
          <FormInput
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>

        <View>
          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={(text) => this.setState({password: text})}
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
  input: {
    marginTop: 20
  },

  buttons: {
    marginTop: 50
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

})

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuButtonPress: () => { dispatch(Actions.drawerOpen()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
