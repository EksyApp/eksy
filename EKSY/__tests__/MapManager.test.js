import React from 'react';
import MapManager from '../App/Map/MapManager';
import Marker from '../App/Map/Marker';

var mapManager = new MapManager();

// Test fails
it('is possible to add a new marker to MapManager', () => {
  var marker = new Marker(60.1699, 24.9384, 1);
  mapManager.addMarker(marker);
  expect(mapManager.getMarkers().length).toBe(1);
});
