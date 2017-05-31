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

export default class Map extends Component {

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
        latitude: 40.77096,
        longitude: -73.97702,
        latitudeDelta: 0.0491,
        longitudeDelta: 0.0375,
      }}
      >
      {/* Loop through characters and add pins on the map */}
      {characters.map((character, index) =>
            // If showGoodOnly is true, but the character is bad - do not show it
            this.state.showGoodOnly && !character.good || <MapView.Marker
              coordinate={{
                latitude: character.coordinate[0],
                longitude: character.coordinate[1],
              }}
              // Callout offset
              calloutOffset={{ x: -8, y: 28 }}
              // Greed color for good characters and red for others
              pinColor={character.good ? '#009688' : '#f44336'}
              key={index}
            >
              {/* Callout */}
              <MapView.Callout tooltip style={styles.callout}>
                <Callout
                  name={character.name}
                  image={character.image}
                />
              </MapView.Callout>
            </MapView.Marker>
          )}
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
