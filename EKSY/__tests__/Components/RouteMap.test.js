import React from 'react';
import renderer from 'react-test-renderer';
import RouteMap from "../../App/Components/Common/RouteMap";


test('RouteMap renders correctly', () => {
	const tree = renderer.create(
			<RouteMap
					initialRegion = {{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
					markers = {[{latitude: 1, longitude: 1}]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});