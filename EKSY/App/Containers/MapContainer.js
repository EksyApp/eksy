import React, {Component} from 'react'
import {PermissionsAndroid} from 'react-native'
import Map from '../Map/Map'
import Styles from './Styles/MapViewStyles'
import MenuButton from '../Components/MenuButton'
import MapManager from '../Map/MapManager'
import Marker from '../Map/Marker'
import {View} from 'react-native'
import * as Actions from '../Actions'
import {connect} from 'react-redux'


export class MapContainer extends Component {

  constructor (props) {
    super(props)

    this.requestLocationPermission()

    // let marker = new Marker(60.185359, 24.951338, 1);
    // marker.setText("Testi text");
    // new MapManager().addMarker(marker);
  }

  async requestLocationPermission () {
    try {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    } catch (err) {
      console.warn(err)
    }
  }

  render () {
    console.log(this.props.markerList)
    return (
      <View style={Styles.container}>
        <Map markerList = {this.props.markerList} currentRegion={this.props.currentRegion} currentLocation={this.props.currentLocation} regionChange={this.props.regionChange} />
        <MenuButton onPress = {() => {this.props.menuButtonPress()}} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.markers.markerList)
  return {
    currentRegion: state.map.currentRegion,
    currentLocation: state.map.location,
    markerList: state.markers.markerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuButtonPress: () => {dispatch(Actions.drawerOpen())},
    regionChange: (region) => {dispatch(Actions.updateRegion(region))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
