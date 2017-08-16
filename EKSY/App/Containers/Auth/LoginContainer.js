
import {
	dismissKeyboard,
} from 'react-native'

import React, {Component} from 'react'
import firebase from 'firebase'
import DismissKeyboard from 'dismissKeyboard'
import {connect} from 'react-redux'
import * as Actions from '../../Actions/index'
import LoginComponent from "../../Components/Auth/LoginComponent";
import Dao from "../../Dao/Dao";
import PropTypes from 'prop-types'

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
			
			this.props.userLoggedIn(await this.dao.getUserObject(null));

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
		menuButtonPress: () => { dispatch(Actions.drawerOpen()) },
		userCreated: () => {dispatch(Actions.userCreated())},
		userLoggedIn: (user) => {dispatch(Actions.userLoggedIn(user))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
