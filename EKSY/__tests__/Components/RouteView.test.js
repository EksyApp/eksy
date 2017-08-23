import React from 'react';
import renderer from 'react-test-renderer';
import RouteView from "../../App/Components/Common/RouteView";

test('RouteViewComponent renders correctly', () => {
	const tree = renderer.create(
			<RouteView
					initialRegion = {{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
					route = {{markers: [{latitude: 1, longitude: 1}]}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});