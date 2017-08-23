import React from 'react';
import renderer from 'react-test-renderer';
import Route from "../../App/Components/Common/Route";

test('Route renders correctly', () => {
	const tree = renderer.create(
			<Route
					initialRegion = {{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
					markers = {[{latitude: 1, longitude: 1}]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});