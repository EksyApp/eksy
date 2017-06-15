import React from 'react'
import 'react-native'
import {shallow} from 'enzyme'
import {AddMarker} from "../App/Containers/AddMarker";
import MapManager from "../App/Map/MapManager";

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

jest.mock('react-native-router-flux', () => ({
	Actions: {
		mapView: jest.fn()
	}
}))

let currentRegion = {
	latitude: 60.184356,
	longitude: 24.949326,
	latitudeDelta: 0.1,
	longitudeDelta: 0.1,
}

let addMarker = shallow(<AddMarker currentRegion={currentRegion} />);
let mapManager = new MapManager();

describe("AddMarker", () => {
	it('Adds a marker without content', () => {
		addMarker.find('Button').last().simulate('press')
		expect(mapManager.getMarkers()[0].props.latitude).toBe(currentRegion.latitude)
		expect(mapManager.getMarkers()[0].props.longitude).toBe(currentRegion.longitude)
	})
})