import React, {Component} from 'react'
import * as ReduxActions from "../../../Actions/index";
import MapComponent from "../../../Components/MainView/Map/MapComponent";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {LocationShape, MarkersShape, RegionShape} from "../../../Utils/PropTypeShapes";

//Renders the map and handles it's logic
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
						radius={this.props.radius}
				/>
		)
	}

}

MapContainer.propTypes = {
	currentRegion: RegionShape,
	regionChange: PropTypes.func,
	markerList: MarkersShape,
	setMarkerSelected: PropTypes.func,
	setMarkerViewVisible: PropTypes.func,
	disableGestures: PropTypes.func,
	currentLocation: LocationShape,
	radius: PropTypes.number
}

const mapStateToProps = (state) => {
	return {
		currentRegion: state.map.currentRegion,
		currentLocation: state.map.location,
		markerList: state.markers.markerList,
		radius: state.map.radius
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
