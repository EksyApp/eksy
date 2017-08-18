import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../../Actions/index'
import {connect} from 'react-redux'
import SideBarComponent from "../../Components/SideBar/SideBarComponent";
import PropTypes from 'prop-types'
import {UserShape} from "../../Utils/PropTypeShapes";

//Renders sidebar view and holds it's logic
export class SideBarContainer extends Component {
	
	render() {
		return (
				<SideBarComponent
						goToMap={this.props.goToMap}
						goToUserSettings={this.props.goToUserSettings}
						goToAddMarker={this.props.goToAddMarker}
						goToLoginScreen={this.props.goToLoginScreen}
						goToAdminTools={this.props.goToAdminTools}
						user={this.props.user}
				/>
		)
	}
}

SideBarContainer.propTypes = {
	goToMap: PropTypes.func,
	goToUserSettings:PropTypes.func,
	goToAddMarker:PropTypes.func,
	goToLoginScreen: PropTypes.func,
	goToAdminTools: PropTypes.func,
	user: UserShape
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		goToMap: () => {
			Actions.mainViewContainer()
			dispatch(ReduxActions.drawerClose())
		},
		goToUserSettings: () => {
			Actions.userSettings()
			dispatch(ReduxActions.drawerClose())
		},
		goToAddMarker: () => {
			Actions.addMarker()
			dispatch(ReduxActions.drawerClose())
		},
		goToLoginScreen: () => {
			Actions.login()
			dispatch(ReduxActions.drawerClose())
		},
		goToAdminTools: () => {
			Actions.adminTools()
			dispatch(ReduxActions.drawerClose())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)