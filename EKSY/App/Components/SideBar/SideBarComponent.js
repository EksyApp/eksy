import React, {Component} from 'react'
import {View, Text} from 'react-native'
import SideBarLogo from '../../Components/SideBar/SideBarLogo'
import {Button} from '../../Components/Common/index'
import * as Theme from '../../Theme/index'
import PropTypes from 'prop-types'
import {UserShape} from "../../Utils/PropTypeShapes";

//Renders the sidebar view that holds buttons to navigate in app
//Go to map closes the sidebar and returns to MainViewComponent
//Settings takes to SettingsComponent
//Add marker takes to AddMarkerComponent
//Login takes to LoginComponent or SignUpComponent
//Admin takes to AdminToolsComponent
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

	renderAdminButton() {
		if (this.props.user && this.props.user.admin) {
			return (
					<Button onPress={this.props.goToAdminTools}>
						Admin
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
						{this.renderAdminButton()}
					</View>
					{__DEV__ && <Text style={{flex: 1, marginLeft: 20, fontSize: 12}}>debug version</Text>}
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

SideBarComponent.propTypes = {
	user: UserShape,
	goToLoginScreen: PropTypes.func,
	goToAddMarker: PropTypes.func,
	goToAdminTools: PropTypes.func,
	goToMap: PropTypes.func,
	goToUserSettings: PropTypes.func,
}
