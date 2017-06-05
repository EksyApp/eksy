import React from 'react';
import MapManager from '../App/Map/MapManager';
import Marker from '../App/Map/Marker';

var mapManager = new MapManager();

describe('addMarker', function() {
  it('adds a new marker to the list', () => {
    var marker = new Marker(60.1699, 24.9384, 1);
    mapManager.addMarker(marker);
    expect(mapManager.getMarkers().length).toEqual(1);
  })
})
