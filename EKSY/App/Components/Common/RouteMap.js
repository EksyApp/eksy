import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {MarkersShape, RegionShape, StyleShape} from '../../Utils/PropTypeShapes'

export default class RouteMap extends Component {
	
	
	render() {
		return (
				<MapView
						style={this.props.style}
						initialRegion={{
							...this.props.initialRegion,
							latitude: this.props.markers[0] ? this.props.markers[0].latitude : this.props.initialRegion.latitude,
							longitude: this.props.markers[0] ? this.props.markers[0].longitude : this.props.initialRegion.longitude
						}}
				>
					{this.props.markers.map((marker, index) => {
						return(
								<MapView.Marker key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}}/>
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

RouteMap.propTypes = {
	style: StyleShape ,
	initialRegion: RegionShape,
	markers: MarkersShape
}