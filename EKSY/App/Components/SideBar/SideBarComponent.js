import React, {Component} from 'react'
import {Image, ScrollView, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SideBarLogo from '../../Components/SideBar/SideBarLogo'
import { Button } from '../../Components/Common/index'
import * as ReduxActions from '../../Actions/index'
import {connect} from 'react-redux'
import * as Theme from '../../Theme/index'

export default class SideBarComponent extends Component {
	
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
						<Button onPress={this.props.goToAddMarker}>
							Add a marker
						</Button>
						<Button onPress={this.props.goToLoginScreen}>
							Login
						</Button>
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