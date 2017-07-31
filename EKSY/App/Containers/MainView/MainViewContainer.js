import React, {Component} from 'react'
import {PermissionsAndroid} from 'react-native'
import * as ReduxActions from '../../Actions/index'
import {connect} from 'react-redux'
import MainViewComponent from "../../Components/MainView/MainViewComponent";


export class MainViewContainer extends Component {
	
	async requestLocationPermission() {
		try {
			const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
			if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
				console.log('no permissions granted') // prompt user?
			}
		} catch (err) {
			console.warn(err)
		}
	}
	
	async componentWillMount() {
		await this.requestLocationPermission()
	}
	
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
		currentRegion: state.map.currentRegion,
		currentLocation: state.map.location,
		markerList: state.markers.markerList,
		markerViewVisible: state.ui.markerView.markerViewVisible,
		filters: state.filters
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => {
			dispatch(ReduxActions.drawerOpen())
		},
		regionChange: (region) => {
			dispatch(ReduxActions.updateRegion(region))
		},
		setMarkerSelected: (marker) => {
			dispatch(ReduxActions.setMarkerSelected(marker))
		},
		setMarkerViewVisible: () => {
			dispatch(ReduxActions.setMarkerViewVisible())
		},
		setMarkerViewHidden: () => {
			dispatch(ReduxActions.setMarkerViewHidden())
		},
		disableGestures: (value) => {
			dispatch(ReduxActions.disableGestures(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer)
