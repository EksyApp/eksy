import React, {Component} from 'react'
import {connect, DismissKeyboard} from "react-redux";
import * as ReduxActions from "../../Actions";
import SignUpComponent from "../../Components/Auth/SignUpComponent";
import firebase from 'firebase'

export class SignUpContainer extends Component {
	
	constructor(props) {
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
	
	render() {
		return (
				<SignUpComponent
						onSignupClick={() => {this.signup()}}
						onEmailChange = {(email) => {this.setState({email: email})}}
						onPasswordChange = {(password) => {this.setState({password: password})}}
						response = {this.state.response}
				/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userCreated: () => {dispatch(ReduxActions.userCreated())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)