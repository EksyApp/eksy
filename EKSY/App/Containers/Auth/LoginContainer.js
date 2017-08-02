
import {
	dismissKeyboard,
} from 'react-native'

import React, {Component} from 'react'
import * as firebase from 'firebase'
import DismissKeyboard from 'dismissKeyboard'
import {connect} from 'react-redux'
import * as Actions from '../../Actions/index'
import LoginComponent from "../../Components/Auth/LoginComponent";

export class LoginContainer extends Component {
	constructor (props) {
		super(props)
		
		this.state = {
			email: '',
			password: '',
			response: '',
			remembered: false
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
        <LoginComponent
            onEmailChange = {(email) => {this.setState({email: email})}}
            onPasswordChange = {(password) => {this.setState({password: password})}}
            onLoginClick = {() => {this.login()}}
            response = {this.state.response}
            onRememberChange={(checked) => {this.setState({remembered: checked})}}
        />
		)
	}
}


const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => { dispatch(Actions.drawerOpen()) },
		userCreated: () => {dispatch(Actions.userCreated())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
