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

class MapView extends Component {

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
    return (
      <View style={Styles.container}>
        <Map />
        <MenuButton onPress = {() => {this.props.MenuButtonPress()}} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    MenuButtonPress: () => {dispatch(Actions.drawerOpen())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView)
