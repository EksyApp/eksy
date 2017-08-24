import React, {Component} from 'react'
import {View} from 'react-native'
import MarkerCarousel from '../MarkerCarousel'

export default class MarkerInfoComponent extends Component {
	
	render() {
		return(
				<MarkerCarousel
						onMarkerClick={this.props.onMarkerClick}
						markerList={this.props.markerList}
						pointerEvents="none"
				/>
		)
	}
	
}