import React, { Component } from 'react'
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View,               // Container component
  ActivityIndicator
} from 'react-native'
import MapView from 'react-native-maps'
import Callout from './Callout'
import styles from './Styles/MapStyles'
import MapManager from './MapManager'

import testData from '../includes/data/Sarjakuvat.json'

export default class Map extends Component {

  constructor (props) {
    super(props)
    this._manager = new MapManager()
    this._manager.setMapObject(this)
    this._map = null
    this.state = { mapLoaded: false }
  }

  update () {
    this.forceUpdate()
  }

  componentDidMount () {
    this.setState({ mapLoaded: true })
  }

  animateToCoordinate (position, delay) {
    if (this.state.mapLoaded) {
      this._map.animateToCoordinate(position, delay)
    } else {
      console.warn('Map not rendered when used animateToCoordinate')
    }
  }

  renderPampylat () {
    return testData.features.map((pampyla, index) => {
      console.log(pampyla.properties.gx_media_links)
      return (
          // If showGoodOnly is true, but the character is bad - do not show it
        <MapView.Marker
          coordinate={{
            longitude: pampyla.geometry.coordinates[0],
            latitude: pampyla.geometry.coordinates[1]
          }}
          // Callout offset
          calloutOffset={{ x: -8, y: 28 }}
          // Greed color for good characters and red for others
          pinColor={'#009688'}
          key={index}
        >
          {/* Callout */}
          <MapView.Callout tooltip style={styles.callout}>
            <Callout
              name={pampyla.properties.Name}
              description={pampyla.properties.description}
              image={pampyla.properties.gx_media_links}
            />
          </MapView.Callout>
        </MapView.Marker>
      )
    })
  }

  renderMapView () {
    if (!this.state.mapLoaded) {
      return (
        <ActivityIndicator size='large' />
      )
    }

    return (
      <MapView
        ref={(ref) => this._map = ref}
        style={styles.map}
        initialRegion={{
          latitude: 60.184356,
          longitude: 24.949326,
          latitudeDelta: 0.0491,
          longitudeDelta: 0.0375
        }}
        >
        {this._manager.getMarkers().map((marker, index) => marker.getComponent())}
        {this.renderPampylat()}
      </MapView>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderMapView()}
      </View>
    )
  }
}
