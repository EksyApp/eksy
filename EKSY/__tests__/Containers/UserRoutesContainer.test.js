import React from 'react'
import { UserRoutesContainer } from '../../App/Containers/Routes/RouteManaging/UserRoutesContainer'
import renderer from 'react-test-renderer'

test('UserRoutesContainer renders correctly', () => {
	const tree = renderer.create(
			<UserRoutesContainer
					setRouteSelected={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});