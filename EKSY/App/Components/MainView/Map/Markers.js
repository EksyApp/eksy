import React, {Component} from 'react'
import Marker from './Marker'
import {View} from 'react-native'

export default class Markers extends Component {
	
	render() {
		return (
				<View>
					{this.props.markerList.map((marker, index) =>
							<Marker
									marker={marker}
									onPress={this.props.onMarkerClick}
									key={marker.key}
							/>
					)}
				</View>
		)
		
	}
	
}