import React, {Component} from 'react'
import {Dimensions, Animated} from 'react-native'
import {LocationShape, RegionShape} from '../../../Utils/PropTypeShapes'
import PropTypes from 'prop-types'
import MapView from 'react-native-maps'


const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export default class UserCircle extends Component {
	
	
	render() {
		let zoomLevel = (360 * ((Screen.width / 256) / this.props.currentRegion.longitudeDelta)) + 1
		return (
				<Animated.View>
					<MapView.Circle center={this.props.currentLocation}
					                radius={this.props.radius * 1000}
					                strokeWidth={0.5}
					                strokeColor="rgba(66, 180, 230, 1)"
					                fillColor="rgba(66, 180, 230, 0.2)"
					/>
					<MapView.Circle center={this.props.currentLocation}
					                radius={300000 / zoomLevel}
					                strokeWidth={0.5}
					                strokeColor="rgba(66, 180, 230, 1)"
					                fillColor="rgba(66, 180, 230, 1)"
					/>
				</Animated.View>
		)
	}
	
}

UserCircle.propTypes = {
	currentRegion: RegionShape,
	radius: PropTypes.number,
	currentLocation: LocationShape
}