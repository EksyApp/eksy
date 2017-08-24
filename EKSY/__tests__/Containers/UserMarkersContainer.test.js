import React from 'react'
import { UserMarkersContainer } from '../../App/Containers/Settings/UserMarkersContainer'
import renderer from 'react-test-renderer'

test('UserMarkersContainer renders correctly', () => {
	const tree = renderer.create(
			<UserMarkersContainer
				setMarkerSelected={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});