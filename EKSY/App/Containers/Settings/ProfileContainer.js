import React, {Component} from 'react'
import ProfileComponent from "../../Components/Settings/ProfileComponent";
import {connect} from "react-redux";
import firebase from 'firebase'
import * as ReduxActions from "../../Actions";
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'
import {UserShape} from "../../Utils/PropTypeShapes";

//Renders the view for user tool's list and holds it's logic
//Upper part of user setting view
//Paths (buttons) to user's markers, routes and signout
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
						onMarkersClick = {() => Actions.usersMarkers()}
						onRoutesClick = {() => Actions.userRoutes()}
				/>
		)
	}

}

ProfileContainer.propTypes  = {
	userSignedOut: PropTypes.func,
	user: UserShape
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userSignedOut: () => {dispatch(ReduxActions.userLoggedOut())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
