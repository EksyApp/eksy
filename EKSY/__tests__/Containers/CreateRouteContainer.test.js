import React from 'react'
import { CreateRouteContainer } from '../../App/Containers/Routes/RouteManaging/CreateRouteContainer'
import renderer from 'react-test-renderer'

test('CreateRouteContainer renders correctly', () => {
	const tree = renderer.create(
			<CreateRouteContainer
					marker={{latitude:1, longitude:1}}
					currentRegion={{latitude:1, longitude:1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});