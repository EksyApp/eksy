import React, {Component} from 'react'
import MapView from 'react-native-maps'

class PointSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      initialLocation: {
        latitude: 60.184356,
        longitude: 24.949326,
        latitudeDelta: 0.0491,
        longitudeDelta: 0.0375,
      },
      markerLocation: {
        latitude: 60.184356,
        longitude: 24.949326,
      },
    }

    this.goToCurrentPosition()

  }

  async goToCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.flyToPosition(position.coords.latitude, position.coords.longitude),
      (error) => this._handleLocationError(error),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
    )
  }

  flyToPosition(latitude, longitude) {
    let position = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    }
    this._mapView.animateToRegion(position, 100)
  }

  _handleLocationError(error) {
    console.log(error)
  }

  _handleChange(region){
    this.setState({markerLocation: {latitude: region.latitude, longitude: region.longitude}})
    this.props.onChange(region)
  }

  render() {
    console.log(this.state.initialLocation)
    return(
      <MapView
      ref = {(ref) => this._mapView = ref}
      style={this.props.style}
      initialRegion = {this.state.initialLocation}
      onRegionChange = {(region) => this._handleChange(region)}
      >
      <MapView.Marker coordinate={this.state.markerLocation}/>
      </MapView>
    )
  }
}

export default PointSelector
