import React from 'react';
import renderer from 'react-test-renderer';
import RoutesOfMarkerComponent from "../../App/Components/Routes/RouteViewing/RoutesOfMarkerComponent";

test('RouteViewComponent renders correctly', () => {
	const tree = renderer.create(
			<RoutesOfMarkerComponent
					routes = {[{markers: [{latitude: 1, longitude: 1}]}]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});