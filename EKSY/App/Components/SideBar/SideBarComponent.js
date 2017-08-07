import React, {Component} from 'react'
import {View} from 'react-native'
import SideBarLogo from '../../Components/SideBar/SideBarLogo'
import {Button} from '../../Components/Common/index'
import * as Theme from '../../Theme/index'
import firebase from 'firebase'

export default class SideBarComponent extends Component {
	
	renderLoginButton() {
		if (!this.props.user) {
			return (
					<Button onPress={this.props.goToLoginScreen}>
						Login
					</Button>
			)
		}
	}
	
	renderAddMarkerButton() {
		if (this.props.user) {
			return (
					<Button onPress={this.props.goToAddMarker}>
						Add a marker
					</Button>
			)
		}
	}
	
	render() {
		return (
				<View style={styles.menubarStyle}>
					<View style={styles.logoStyle}>
						<SideBarLogo />
					</View>
					<View style={styles.buttonList}>
						<Button onPress={this.props.goToMap}>
							Go to map
						</Button>
						<Button onPress={this.props.goToUserSettings}>
							Settings
						</Button>
						{this.renderAddMarkerButton()}
						{this.renderLoginButton()}
					</View>
				</View>
		)
	}
}

const styles = {
	menubarStyle: {
		flex: 1,
		flexDirection: 'column',
		// Placeholder background color
		backgroundColor: Theme.backgroundColor,
	},
	buttonList: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	logoStyle: {
		// Three blue lines are from the logo picture
	}
}