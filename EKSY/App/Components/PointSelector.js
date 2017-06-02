import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PostOffice from '../lib/PostOffice'
import MapManager from '../Map/MapManager'

class PointSelector extends Component {

  constructor(props) {
    super(props)
    this.po = new PostOffice()
    this.mapManager = new MapManager();
    let currentRegion = this.po.getPacket("currentRegion")

    this.state = {
      initialLocation:
      currentRegion,
      markerLocation: {
        latitude: currentRegion.latitude,
        longitude: currentRegion.longitude,
      },
    }
    //
    // this.goToCurrentPosition()
  }

  async goToCurrentPosition() {
    this.flyToPosition(this.mapManager.getPosition().latitude, this.mapManager.getPosition().longitude)
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
