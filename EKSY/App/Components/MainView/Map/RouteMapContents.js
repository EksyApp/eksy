import React, {Component} from 'react'
import {View} from 'react-native'
import UserCircle from './UserCircle'
import Route from './Route'
import {LocationShape, MarkerShape, RegionShape, RouteShape} from '../../../Utils/PropTypeShapes'
import PropTypes from 'prop-types'

export default class RouteMapContents extends Component {
	
	render() {
		return(
				<View>
					<UserCircle
							currentLocation={this.props.currentLocation}
							currentRegion={this.props.currentRegion}
							radius={this.props.radius}
					/>
					<Route
							route={this.props.route}
							nextMarker={this.props.nextMarker}
							currentLocation={this.props.currentLocation}
							radius={this.props.radius}
							onMarkerClick={this.props.onMarkerClick}
					/>
				</View>
		)
	}
	
}

RouteMapContents.propTypes = {
	currentLocation: LocationShape,
	currentRegion: RegionShape,
	radius: PropTypes.number,
	route: RouteShape,
	nextMarker: MarkerShape,
	onMarkerClick: PropTypes.func
}