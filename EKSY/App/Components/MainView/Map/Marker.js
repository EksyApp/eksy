import React, {Component} from 'react'
import MapView from 'react-native-maps'
import { MarkerShape } from "../../../Utils/PropTypeShapes";
import PropTypes from 'prop-types'

//Renders the marker tags on Map
//Clickable marker component opens a modal (MarkerModal) to view marker's content 
class Marker extends Component {
	

	_handlePress() {
		this.props.onPress(this.props.marker)
	}

	_markerColor(status) {
		switch (status) {
			case 0: return 'rgb(255,255,0)'
			case 1: return 'rgb(0,255,0)'
			case -1: return 'rgb(255,0,0)'
			default: return 'rgb(211,211,211)'
		}
		
	}

	render () {
		return (
				<MapView.Marker
						coordinate={{latitude: this.props.marker.latitude, longitude: this.props.marker.longitude}}
						pinColor={this._markerColor(this.props.marker.status)}
						onPress={() => {this._handlePress()}}
				>
				</MapView.Marker>
		)
	}


}

Marker.propTypes = {
	marker: MarkerShape,
	onPress: PropTypes.func
}

export default Marker
