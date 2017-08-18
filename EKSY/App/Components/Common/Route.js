import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types';
import {MarkersShape, RegionShape, StyleShape} from '../../Utils/PropTypeShapes'

export default class Route extends Component {
	
	
	render() {
		return (
				<MapView
						style={this.props.style}
						initialRegion={{
							...this.props.initialRegion,
							latitude: this.props.markers[0].latitude,
							longitude: this.props.markers[0].longitude
						}}
				>
					{this.props.markers.map((marker) => {
						return(
								<MapView.Marker coordinate={{latitude: marker.latitude, longitude: marker.longitude}}/>
						)
					})}
					
					<MapView.Polyline
							coordinates={this.props.markers.map((marker) => {
								return {latitude: marker.latitude, longitude: marker.longitude}
							})}
					/>
				</MapView>
		)
	}
}

Route.propTypes = {
	style: StyleShape ,
	initialRegion: RegionShape,
	markers: MarkersShape
}