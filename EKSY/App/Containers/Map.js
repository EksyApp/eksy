import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View                // Container component
} from 'react-native';
import MapView from 'react-native-maps';
// Import data
import { characters } from './data';
import Callout from './Callout';
import styles from './Styles/MapStyles'

import testData from '../includes/data/Sarjakuvat.json'

export default class Map extends Component {

  state = {
    // Show good or all characters flag
    showGoodOnly: false,
  }

  renderPampylat() {
    return testData.features.map((pampyla, index) => {
      console.log(pampyla.properties.gx_media_links)
      return (
          // If showGoodOnly is true, but the character is bad - do not show it
        <MapView.Marker
          coordinate={{
            longitude: pampyla.geometry.coordinates[0],
            latitude: pampyla.geometry.coordinates[1],
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

  render() {
    return (
      <View style={styles.container}>
      {/* Map*/}
        <MapView
          style={styles.map}
          // Position on Manhattan, New York
          initialRegion={{
            latitude: 60.1824268,
            longitude: 24.9632764,
            latitudeDelta: 0.0491,
            longitudeDelta: 0.0375,
          }}
        >
        {/* Loop through characters and add pins on the map */}
          {this.renderPampylat()}
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
