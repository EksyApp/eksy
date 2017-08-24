import React from 'react'
import { AdminMarkerViewContainer } from '../../App/Containers/Admin/AdminMarkerViewContainer'
import renderer from 'react-test-renderer'

test('AdminMarkerViewContainer renders correctly', () => {
	const tree = renderer.create(
			<AdminMarkerViewContainer
					currentRegion={{latitude: 1, longitude: 1}}
					marker = {{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});