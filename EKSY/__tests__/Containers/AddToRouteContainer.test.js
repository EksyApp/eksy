import React from 'react'
import { AddToRouteContainer } from '../../App/Containers/Routes/RouteManaging/AddToRouteContainer'
import renderer from 'react-test-renderer'

test('AddToRouteContainer renders correctly', () => {
	const tree = renderer.create(
			<AddToRouteContainer
					marker={{latitude:1, longitude:1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});