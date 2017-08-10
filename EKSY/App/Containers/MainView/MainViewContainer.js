import React, {Component} from 'react'
import {PermissionsAndroid} from 'react-native'
import * as ReduxActions from '../../Actions/index'
import {connect} from 'react-redux'
import MainViewComponent from "../../Components/MainView/MainViewComponent";


export class MainViewContainer extends Component {
	
	render() {
		return (
				<MainViewComponent
						menuButtonPress = {this.props.menuButtonPress}
				/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => {
			dispatch(ReduxActions.drawerOpen())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer)
