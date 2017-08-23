import React, {Component} from 'react'
import Markers from './Markers'
import {View} from 'react-native'
import UserCircle from './UserCircle'
import {LocationShape, MarkersShape, RegionShape} from '../../../Utils/PropTypeShapes'
import PropTypes from 'prop-types'

export default class DefaultMapContents extends Component {
	
	render() {
		return (
				<View>
					<Markers
							markerList={this.props.markerList}
							onMarkerClick={this.props.onMarkerClick}
					/>
					<UserCircle
							currentLocation={this.props.currentLocation}
							radius={this.props.radius}
							currentRegion={this.props.currentRegion}
					/>
				</View>
		)
	}
	
}

DefaultMapContents.propTypes = {
	markerList: MarkersShape,
	currentLocation: LocationShape,
	radius: PropTypes.number,
	currentRegion: RegionShape,
	onMarkerClick: PropTypes.func
}