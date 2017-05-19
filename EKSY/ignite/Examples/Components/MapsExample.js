import React from 'react'
import { View } from 'react-native'
import ExamplesRegistry from '../../../App/Services/ExamplesRegistry'
import MapView from 'react-native-maps'

// Example
ExamplesRegistry.addPluginExample('Maps', () =>
  <View
    style={{
      alignItems: 'center'
    }}>
    <MapView
      style={{
        width: 320,
        height: 320
      }}
      initialRegion={{
        latitude: 60.170882,
        longitude: 24.944220,
        latitudeDelta: 0.0500,
        longitudeDelta: 0.0500
      }}
    />
  </View>
)
