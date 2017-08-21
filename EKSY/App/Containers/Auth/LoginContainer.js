
import {
	dismissKeyboard,
} from 'react-native'

import React, {Component} from 'react'
import firebase from 'firebase'
import DismissKeyboard from 'dismissKeyboard'
import {connect} from 'react-redux'
import * as ReduxActions from '../../Actions/index'
import LoginComponent from "../../Components/Auth/LoginComponent";
import Dao from "../../Dao/Dao";
import PropTypes from 'prop-types'
import {Actions} from 'react-native-router-flux'

//Renders the login view and holds it's logic
export class LoginContainer extends Component {
	constructor (props) {
		super(props)
		
		this.state = {
			email: '',
			password: '',
			response: '',
			remembered: false
		}
		
		this.dao = new Dao()
		
	}
	
	async login () {
		DismissKeyboard()
		try {
			
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			this.setState({
				response: 'Logged In!'
			})
			
			await this.dao.userLoggedIn()
			
			setTimeout(() => {Actions.pop()}, 1000)
			
		} catch (error) {
			console.warn(error)
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
				/>
		)
	}
}

LoginContainer.propTypes = {
	userLoggedIn: PropTypes.func
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => { dispatch(ReduxActions.drawerOpen()) },
		userCreated: () => {dispatch(ReduxActions.userCreated())},
		userLoggedIn: (user) => {dispatch(ReduxActions.userLoggedIn(user))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
