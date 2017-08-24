import React from 'react'
import { RouteInfoContainer } from '../../App/Containers/MainView/BottomSheet/RouteInfo/RouteInfoContainer'
import renderer from 'react-test-renderer'

test('RouteInfoContainer renders correctly', () => {
	const tree = renderer.create(
			<RouteInfoContainer
					setMarkerSelected={() => {}}
					setMarkerViewVisible={() => {}}
					disableGestures={() => {}}
					markerList = {[{latitude: 1, longitude: 1, title: "", text: ""}]}
					route={{title: "", text: "", markers: [{latitude: 1, longitude: 1, title: "", text: ""}]}}
					nextMarker={{latitude: 1, longitude: 1, title: "", text: ""}}
					currentLocation={{latitude: 1, longitude: 1}}
					setRouteIsActive={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});