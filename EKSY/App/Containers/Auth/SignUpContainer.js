import React, {Component} from 'react'
import {connect} from "react-redux";
import DismissKeyboard from 'dismissKeyboard'
import * as ReduxActions from "../../Actions";
import SignUpComponent from "../../Components/Auth/SignUpComponent";
import firebase from 'firebase'
import Dao from "../../Dao/Dao";
import PropTypes from 'prop-types'

export class SignUpContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
			response: ''
		}
		
		this.dao = new Dao();
	}

	async signup () {
		DismissKeyboard()

		try {
			if (this.state.password !== this.state.confirmPassword) {
				throw 'Passwords don\'t match'
			}
			await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			await firebase.auth().currentUser.updateProfile({
				displayName: this.state.username
			})
			this.props.userCreated()
			this.setState({
				response: 'account created'
			})
			this.props.userLoggedIn(await this.dao.getUserObject(null))
		} catch (error) {
			this.setState({
				response: error.toString()
			})
		}
	}

	render() {
		return (
				<SignUpComponent
						onSignupClick={() => {this.signup()}}
						onEmailChange = {(email) => {this.setState({email: email})}}
						onUsernameChange = {(username) => {this.setState({username: username})}}
						onPasswordChange = {(password) => {this.setState({password: password})}}
						onConfirmPasswordChange = {(password) => {this.setState({confirmPassword: password})}}
						response = {this.state.response}
				/>
		)
	}

}

SignUpContainer.propTypes = {
	userCreated: PropTypes.func,
	userLoggedIn: PropTypes.func
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userCreated: () => {dispatch(ReduxActions.userCreated())},
		userLoggedIn: (user) => {dispatch(ReduxActions.userLoggedIn(user))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
