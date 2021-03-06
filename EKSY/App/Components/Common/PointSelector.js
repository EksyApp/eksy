import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types';
import {RegionShape, StyleShape} from "../../Utils/PropTypeShapes";

class PointSelector extends Component {
	
	constructor(props) {
		super(props)
		
		this._mapIsBeingMoved = false
		
		this.state = {
			markerLocation: {
				latitude: this.props.initialRegion.latitude,
				longitude: this.props.initialRegion.longitude
			}
		}
	}
	
	
	_handleChange(region) {
		this._mapIsBeingMoved = true
		this.setState({markerLocation: {latitude: region.latitude, longitude: region.longitude}})
	}
	
	_handleChangeComplete(region) {
		if (this._mapIsBeingMoved) {
			this.setState({markerLocation: {latitude: region.latitude, longitude: region.longitude}})
			this.props.onChange(region)
		}
		this._mapIsBeingMoved = false
	}
	
	render() {
		return (
				<MapView
						style={this.props.style}
						initialRegion={this.props.initialRegion}
						onRegionChange={(region) => this._handleChange(region)}
						onRegionChangeComplete={(region) => this._handleChangeComplete(region)}
				>
					<MapView.Marker coordinate={this.state.markerLocation}/>
				</MapView>
		)
	}
	
}

PointSelector.propTypes = {
	onChange: PropTypes.func,
	style: StyleShape,
	initialRegion: RegionShape
}

export default PointSelector
