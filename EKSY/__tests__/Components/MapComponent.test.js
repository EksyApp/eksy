import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MapComponent from "../../App/Components/MainView/Map/MapComponent";

jest.mock('../../App/Utils/MapManager', () => {
	class MapManagerMock {
		constructor() {
		
		}
		
		startLocationWatcher = jest.fn()
		storeListener = jest.fn()
		goToCurrentPosition = jest.fn()
		flyToPosition = jest.fn()
		setMapObject = jest.fn()
	}
	
	return MapManagerMock
})

test('MapComponent renders correctly', () => {
	const tree = renderer.create(
			<MapComponent
					currentRegion={{
						latitude: 1,
						longitude: 1,
						latitudeDelta: 1,
						longitudeDelta: 1
					}}
					
					currentLocation={{
						latitude: 1,
						longitude: 1,
						isKnown: false
					}}
					markerList={[]}
					radius={10}
					onMarkerClick = {() => {}}
					routeIsActive
					route = {{title: "", text:"", markers: [{}]}}
					nextMarker = {{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
