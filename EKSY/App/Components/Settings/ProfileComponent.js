import React, {Component} from 'react'
import Label from "../Common/Label";
import Button from "../Common/Button";
import {View} from "react-native";
import Message from "../Common/Message";
import {Actions} from 'react-native-router-flux'

export default class ProfileComponent extends Component {
	
	renderUserInfo() {
		if (this.props.user) {
			return (
					<Message>{this.props.user.firebaseUser.displayName}</Message>
			)
		}
	}
	
	renderProfileActionButton() {
		if (this.props.user) {
			return (
					<Button onPress={() => {this.props.onSignoutClick()}}>
						Signout
					</Button>
			)
		} else {
			return(
					<Button onPress={() => {Actions.login()}}>Login</Button>
			)
		}
	}
	
	renderShowMarkersButton() {
		if (this.props.user) {
			return (
					<Button onPress={() => {this.props.onMarkersClick()}}>
						Markers
					</Button>
			)
		}
	}
	
	render() {
		return (
				<View>
					<Label>Profile</Label>
					{this.renderUserInfo()}
					{this.renderShowMarkersButton()}
					{this.renderProfileActionButton()}
				</View>
		)
	}
	
	
}