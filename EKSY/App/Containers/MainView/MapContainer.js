import React, {Component} from 'react'
import * as ReduxActions from "../../Actions/";
import MapComponent from "../../Components/MainView/MapComponent";
import {connect} from "react-redux";

export class MapContainer extends Component {
	
	render() {
		return (
				<MapComponent
						currentRegion={this.props.currentRegion}
						regionChange={this.props.regionChange}
						markerList={this.props.markerList}
						setMarkerSelected={this.props.setMarkerSelected}
						setMarkerViewVisible={this.props.setMarkerViewVisible}
						disableGestures={this.props.disableGestures}
						currentLocation={this.props.currentLocation}
				/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		currentRegion: state.map.currentRegion,
		currentLocation: state.map.location,
		markerList: state.markers.markerList,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		regionChange: (region) => {
			dispatch(ReduxActions.updateRegion(region))
		},
		setMarkerSelected: (marker) => {
			dispatch(ReduxActions.setMarkerSelected(marker))
		},
		setMarkerViewVisible: () => {
			dispatch(ReduxActions.setMarkerViewVisible())
		},
		disableGestures: (value) => {
			dispatch(ReduxActions.disableGestures(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)