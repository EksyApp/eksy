import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../../../Actions/index'
import {ImagesShape} from "../../../Utils/PropTypeShapes";

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
	data: PropTypes.shape({
		latitude: PropTypes.number.isRequired,
		longitude: PropTypes.number.isRequired,
		color: PropTypes.string,
		text: PropTypes.string,
		title: PropTypes.string,
		images: ImagesShape
	}
	
	export default Marker
