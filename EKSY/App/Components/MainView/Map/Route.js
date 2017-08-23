import React, {Component} from 'react'
import {View} from 'react-native'
import Markers from './Markers'
import Geometry from '../../../Utils/Geometry'
import Marker from './Marker'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
import {LocationShape, MarkerShape, RouteShape} from '../../../Utils/PropTypeShapes'

export default class Route extends Component {
	
	constructor(props) {
		super(props)
		this.nextMarkerKey = null
		
		this.state = {
			previousMarkers: this.getPreviousMarkers(this.props.nextMarker)
		}
	}
	
	getPreviousMarkers(nextMarker) {
		let previousMarkers = []
		for (let marker of this.props.route.markers) {
			if (marker.key !== nextMarker.key) {
				previousMarkers.push(marker)
			} else {
				break
			}
		}
		return previousMarkers
	}
	
	componentWillReceiveProps(props) {
		if (props.nextMarker.key !== this.nextMarkerKey) {
			this.nextMarkerKey = props.nextMarker.key
			this.setState({previousMarkers: this.getPreviousMarkers(props.nextMarker)})
		}
		
	}
	
	renderNextMarker() {
		if (Geometry.distance(this.props.currentLocation, this.props.nextMarker) >= this.props.radius) {
			return (
					<Marker
							marker={{
								...Geometry.getPointOnRadius(this.props.currentLocation, this.props.nextMarker, this.props.radius),
								status: 2
							}}
							onPress={() => {}}
					/>
			)
		} else {
			return (
					<Marker
							marker={this.props.nextMarker}
							onPress={(marker) => this.props.onMarkerClick(marker, this.state.previousMarkers.length)}
					/>
			)
		}
	}
	
	renderPointerToNextMarker() {
		if(this.state.previousMarkers.length > 0) {
			let lastVisited = this.state.previousMarkers[this.state.previousMarkers.length-1]
			let pointerLength = 0.1
			if(Geometry.distance(lastVisited, this.props.nextMarker) >= pointerLength) {
				return <MapView.Polyline coordinates={[lastVisited, Geometry.getPointOnRadius(lastVisited, this.props.nextMarker, pointerLength)]}/>
			} else {
				return <MapView.Polyline coordinates={[lastVisited, this.props.nextMarker]}/>
			}
		}
		
	}
	
	render() {
		return (
				<View>
					<Markers
							markerList={this.state.previousMarkers}
							onMarkerClick={this.props.onMarkerClick}
					/>
					{this.renderNextMarker()}
					<MapView.Polyline coordinates={this.state.previousMarkers}/>
					{this.renderPointerToNextMarker()}
				</View>
		)
	}
	
	
	
}

Route.propTypes = {
	route: RouteShape,
	nextMarker: MarkerShape,
	currentLocation: LocationShape,
	radius: PropTypes.number,
	onMarkerClick: PropTypes.func
}