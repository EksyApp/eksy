import React, {Component} from 'react'
import MapView from 'react-native-maps'
import MapManager from '../Containers/Map/MapManager'

class PointSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      markerLocation: new MapView.AnimatedRegion({
        latitude: this.props.currentRegion.latitude,
        longitude: this.props.currentRegion.longitude
      })
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
        initialRegion = {this.props.currentRegion}
        onRegionChange = {(region) => this._handleChange(region)}
      >
        <MapView.Marker.Animated coordinate={this.state.markerLocation}/>
      </MapView>
    )
  }
}

export default PointSelector
