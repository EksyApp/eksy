import React, {Component} from 'react'
import MapView from 'react-native-maps'
import { MarkerShape } from "../../../Utils/PropTypeShapes";

//Renders the marker tags on Map
//When marker tag is pressed opens marker view modal (MarkerModal)
class Marker extends Component {
	constructor (props) {
		super(props)
		
	}
	
	_handlePress() {
		this.props.setMarkerSelected(this.props.data)
		this.props.disableGestures(true)
		this.props.setMarkerViewVisible()
		//ReduxActions.markerView();
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
						coordinate={{latitude: this.props.data.latitude, longitude: this.props.data.longitude}}
						pinColor={this._markerColor(this.props.data.status)}
						onPress={() => {this._handlePress()}}
				>
				</MapView.Marker>
		)
	}
	
	
}

Marker.propTypes = {
	data: MarkerShape
}

export default Marker
