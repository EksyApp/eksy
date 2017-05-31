import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View                // Container component
} from 'react-native';
import MapView from 'react-native-maps';
// Import data
// import { characters } from './data';
import Callout from './Callout';
import styles from './Styles/MapStyles'
import MapManager from './MapManager'

export default class Map extends Component {

  constructor(props) {
    super(props)
    this.manager = new MapManager();

  }

  state = {
    // Show good or all characters flag
    showGoodOnly: false,
  }

  render() {
    return (
      <View style={styles.container}>
      {/* Map*/}
      <MapView
      style={styles.map}
      // Position on Manhattan, New York
      initialRegion={{
        latitude: 60.184356,
        longitude: 24.949326,
        latitudeDelta: 0.0491,
        longitudeDelta: 0.0375,
      }}
      >
      {this.manager.getMarkerComponents().map((marker, index) => marker.getComponent())}
      </MapView>
      {/* Button */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={styles.button}
      // Toggle this.state.showGoodOnly
      onPress={() => this.setState({
        showGoodOnly: !this.state.showGoodOnly
      })}
      >
      <Text>{this.state.showGoodOnly ? 'Show All' : 'Show Good Only'}</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}
