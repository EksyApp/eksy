import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PostOffice from '../lib/PostOffice'
import MapManager from '../Map/MapManager'

class PointSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      markerLocation: {
        latitude: this.props.initialRegion.latitude,
        longitude: this.props.initialRegion.latitude
      }
    }
  }


  _handleChange(region){
    this.setState({markerLocation: {latitude: region.latitude, longitude: region.longitude}})
    this.props.onChange(region)
  }

  render() {
    return(
      <MapView
        style={this.props.style}
        initialRegion = {this.props.initialRegion}
        onRegionChange = {(region) => this._handleChange(region)}
      >
        <MapView.Marker coordinate={this.state.markerLocation}/>
      </MapView>
    )
  }
}

export default PointSelector
