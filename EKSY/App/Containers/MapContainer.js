import React, {Component} from 'react'
import {PermissionsAndroid} from 'react-native'
import Map from './Map/Map'
import MenuButton from '../Components/MenuButton'
import { View, StyleSheet, Dimensions, Animated, Text } from 'react-native'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import Interactable from 'react-native-interactable'
import MarkerCarousel from '../Components/MarkerCarousel'
import {backgroundColor} from '../Theme'

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

        <View style={styles.viewContainer}>
          <Map
            currentRegion={this.props.currentRegion}
            currentLocation={this.props.currentLocation}
            markerList={this.props.markerList}
            setMarkerSelected={this.props.setMarkerSelected}
            regionChange={this.props.regionChange} />
            <MenuButton onPress={() => { this.props.menuButtonPress() }} />
          <View style={styles.panelContainer}>
           <Animated.View style={[styles.panelContainer,{
             opacity: this._deltaY.interpolate({
               inputRange: [0, Screen.height-100],
               outputRange: [0, 1],
               extrapolateRight: 'clamp'
             })
           }]}
             pointerEvents="none" />
           <Interactable.View
             verticalOnly={true}
             snapPoints={[{y: Screen.height-200}, {y: Screen.height+20}]}
             boundaries={{top: 300}}
             initialPosition={{y: Screen.height+20}}
             animatedValueY={this._deltaY}>
             <Animated.View style={styles.panel}>
               <MarkerCarousel
                markerList = {this.props.markerList}
                setMarkerSelected={this.props.setMarkerSelected}
                pointerEvents = "none" />
             </Animated.View>
           </Interactable.View>
         </View>
        </View>
    )
  }
}

// <View style={styles.panel}>
// </View>
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
    flex: 1

  },
  viewContainer: {
    flex: 1,
  },
  panel: {
    width: Screen.width,
    height: Screen.height + 300,
    paddingTop: 30,
    backgroundColor: backgroundColor,
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
    regionChange: (region) => { dispatch(Actions.updateRegion(region)) },
    setMarkerSelected: (marker) => { dispatch(Actions.setMarkerSelected(marker)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
