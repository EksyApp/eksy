import React, {Component} from 'react'
import MapView from 'react-native-maps'

class PointSelector extends Component {
	
	constructor(props) {
		super(props)
		
		this._mapIsBeingMoved = false
		
		this.state = {
			markerLocation: {
				latitude: this.props.currentRegion.latitude,
				longitude: this.props.currentRegion.longitude
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
						initialRegion={this.props.currentRegion}
						onRegionChange={(region) => this._handleChange(region)}
						onRegionChangeComplete={(region) => this._handleChangeComplete(region)}
				>
					<MapView.Marker coordinate={this.state.markerLocation}/>
				</MapView>
		)
	}
	
}

export default PointSelector
