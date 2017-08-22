import React, {Component} from 'react'
import MapView from 'react-native-maps'
import { MarkerShape } from "../../../Utils/PropTypeShapes";

//Renders the marker tags on Map
//Clickable marker component opens a modal (MarkerModal) to view marker's content 
class Marker extends Component {
	constructor (props) {
		super(props)

	}

	_handlePress() {
		this.props.onPress(this.props.marker)
	}

	_markerColor(status) {
		switch (status) {
			case 0: return '#FFFF00'
			case 1: return '#00FF00'
		}
		return '#FF0000'
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
	marker: MarkerShape
}

export default Marker
