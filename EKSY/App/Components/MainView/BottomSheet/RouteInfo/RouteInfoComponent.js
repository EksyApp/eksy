import React, {Component} from 'react'
import {LocationShape, MarkerShape, MarkersShape} from '../../../../Utils/PropTypeShapes'
import PropTypes from 'prop-types'
import MarkerCarousel from '../MarkerCarousel'


export default class RouteInfoComponent extends Component {
	
	render() {
		return(
			<MarkerCarousel
					markerList={this.props.previousMarkers}
					onMarkerClick={this.props.onMarkerClick}
					showTeaser
					currentLocation={this.props.currentLocation}
					nextMarker={this.props.nextMarker}
			/>
		)
	}
	
}

RouteInfoComponent.propTypes = {
	previousMarkers: MarkersShape,
	onMarkerClick: PropTypes.func,
	currentLocation: LocationShape,
	nextMarker: MarkerShape
}