import React from 'react'
import { ConfirmMarkersContainer } from '../../App/Containers/Admin/ConfirmMarkersContainer'
import renderer from 'react-test-renderer'

test('ConfirmMarkersContainer renders correctly', () => {
	const tree = renderer.create(
			<ConfirmMarkersContainer
					setMarkerSelected={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});