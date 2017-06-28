import React, {Component} from 'react'
import {PermissionsAndroid} from 'react-native'
import Map from '../Map/Map'
import MenuButton from '../Components/MenuButton'
import MapManager from '../Map/MapManager'
import Marker from '../Map/Marker'
import { View, StyleSheet, Dimensions, Animated, Text } from 'react-native'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import Interactable from 'react-native-interactable'
import MarkerCarousel from '../Components/MarkerCarousel'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}

export class MapContainer extends Component {

  constructor (props) {
    super(props)

    this.requestLocationPermission()

      this._deltaY = new Animated.Value(Screen.height-100);
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

        <View style={styles.view}>
          <View style={styles.panelContainer}>
           <Animated.View style={[styles.panelContainer,{
             opacity: this._deltaY.interpolate({
               inputRange: [0, Screen.height-100],
               outputRange: [0, 1],
               extrapolateRight: 'clamp'
             })
           }]}>
           <Map
             currentRegion={this.props.currentRegion}
             currentLocation={this.props.currentLocation}
             markerList={this.props.markerList}
             regionChange={this.props.regionChange} />
           <MenuButton onPress={() => { this.props.menuButtonPress() }} />
           </Animated.View>
           <Interactable.View
             verticalOnly={true}
             snapPoints={[{y: Screen.height-200}, {y: Screen.height-20}]}
             boundaries={{top: -300}}
             initialPosition={{y: Screen.height-20}}
             animatedValueY={this._deltaY}>
             <View style={styles.panel}>
             <MarkerCarousel
              markerList = {this.props.markerList} />
             </View>
           </Interactable.View>
         </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  view: {
    flex: 1
  },
  panel: {
    height: Screen.height + 300,
    padding: 20,
    backgroundColor: '#f7f5eee8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4
  },
})

const mapStateToProps = (state) => {
  return {
    currentRegion: state.map.currentRegion,
    currentLocation: state.map.location,
    markerList: state.markers.markerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuButtonPress: () => { dispatch(Actions.drawerOpen()) },
    regionChange: (region) => { dispatch(Actions.updateRegion(region)) }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
