import React from 'react';
import renderer from 'react-test-renderer';
import RouteViewComponent from "../../App/Components/Routes/RouteViewing/RouteViewComponent";

test('RouteViewComponent renders correctly', () => {
	const tree = renderer.create(
			<RouteViewComponent
					route = {{markers: [{latitude: 1, longitude: 1}]}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});