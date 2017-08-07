import React, {Component} from 'react'
import ProfileComponent from "../../Components/Settings/ProfileComponent";
import {connect} from "react-redux";
import firebase from 'firebase'
import * as ReduxActions from "../../Actions";

export class ProfileContainer extends Component {
	
	async signout() {
		await firebase.auth().signOut()
		this.props.userSignedOut()
	}
	
	render() {
		console.log(this)
		return (
				<ProfileComponent
						user={this.props.user}
						onSignoutClick={() => {
							this.signout()
						}}
				/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userSignedOut: () => {dispatch(ReduxActions.userSignedOut())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)