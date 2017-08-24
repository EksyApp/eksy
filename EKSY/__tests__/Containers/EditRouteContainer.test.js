import React from 'react'
import { EditRouteContainer } from '../../App/Containers/Routes/RouteManaging/EditRouteContainer'
import renderer from 'react-test-renderer'

test('EditRouteContainer renders correctly', () => {
	const tree = renderer.create(
			<EditRouteContainer
					route={{title: "", text: "", markers: [{latitude: 1, longitude: 1}]}}
					currentRegion={{latitude:1, longitude:1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});