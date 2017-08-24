import React from 'react'
import { RouteViewContainer } from '../../App/Containers/Routes/RouteViewing/RouteViewContainer'
import renderer from 'react-test-renderer'

test('RouteViewContainer renders correctly', () => {
	const tree = renderer.create(
			<RouteViewContainer
					setMarkerSelected={() => {}}
					route={{title: "", text: "", markers: [{latitude: 1, longitude: 1, title: "", text: ""}]}}
					currentRegion={{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});