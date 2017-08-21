import React, {Component} from 'react'
import * as ReduxActions from "../../../Actions/index";
import MapComponent from "../../../Components/MainView/Map/MapComponent";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {LocationShape, MarkerShape, MarkersShape, RegionShape, RouteShape} from '../../../Utils/PropTypeShapes'
import * as GeoFire from 'geofire'

//Renders the map and handles it's logic
export class MapContainer extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			markers: this.props.markerList
		}
		
	}
	
	componentWillReceiveProps(props) {
		if(props.routeIsActive) {
			let markers = []
			for (let marker of props.route.markers) {
				
				if(marker.key === props.nextMarker.key) {
					if(GeoFire.distance([this.props.currentLocation.latitude, this.props.currentLocation.longitude], [marker.latitude, marker.longitude]) <= this.props.radius) {
						markers.push(marker)
					}
					break
				} else {
					markers.push(marker)
				}
			}
			this.setState({markers})
		} else {
			this.setState({markers: this.props.markerList})
		}
	}

	render() {
		return (
				<MapComponent
						currentRegion={this.props.currentRegion}
						regionChange={this.props.regionChange}
						markerList={this.state.markers}
						setMarkerSelected={this.props.setMarkerSelected}
						setMarkerViewVisible={this.props.setMarkerViewVisible}
						disableGestures={this.props.disableGestures}
						currentLocation={this.props.currentLocation}
						radius={this.props.radius}
						routeIsActive={this.props.routeIsActive}
						route={this.props.route}
						nextMarker={this.props.nextMarker}
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
	radius: PropTypes.number,
	routeIsActive: PropTypes.bool,
	route: RouteShape,
	nextMarker: MarkerShape
}

const mapStateToProps = (state) => {
	return {
		currentRegion: state.map.currentRegion,
		currentLocation: state.map.location,
		markerList: state.markers.markerList,
		radius: state.map.radius,
		routeIsActive: state.routes.routeActive.active,
		route: state.routes.routeActive.route,
		nextMarker: state.routes.routeActive.nextMarker
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
