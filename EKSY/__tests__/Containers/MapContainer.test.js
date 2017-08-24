import React from 'react'
import { MapContainer } from '../../App/Containers/MainView/Map/MapContainer'
import renderer from 'react-test-renderer'

test('MapContainer renders correctly', () => {
	const tree = renderer.create(
			<MapContainer
					markerList = {[{latitude: 1, longitude: 1, title: "", text: ""}]}
					currentRegion={{latitude: 1, longitude: 1}}
					regionChange={() => {}}
					setMarkerSelected={() => {}}
					setMarkerViewVisible={() => {}}
					disableGestures={() => {}}
					currentLocation={{latitude: 1, longitude: 1, isKnown: true}}
					radius={10}
					routeIsActive
					route={{title: "", text: "", markers: [{latitude: 1, longitude: 1, title: "", text: ""}]}}
					nextMarker = {{latitude: 2, longitude: 1, title: "", text: ""}}
					setNextMarker={() => {}}
					setRouteIsActive={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});