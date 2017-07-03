import React from 'react'
import 'react-native'
import MapManager from '../App/Containers/Map/MapManager'

MapManager.prototype.startLocationWatcher = jest.fn()
var mapManager = new MapManager()

describe('MapManager', function () {
	it('getNextID returns correct id', () => {
		expect(MapManager.getNextID()).toBe(1)
	})

	it('adds a new marker to the list', () => {
		var marker = {latitude: 60.1699, longitude: 24.9384}
		mapManager.addMarker(marker)
		expect(mapManager.getMarkers().length).toEqual(1)
	})
})
