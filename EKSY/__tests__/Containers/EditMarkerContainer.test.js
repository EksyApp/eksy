import React from 'react'
import { EditMarkerContainer } from '../../App/Containers/EditMarker/EditMarkerContainer'
import renderer from 'react-test-renderer'

test('EditMarkerContainer renders correctly', () => {
	const tree = renderer.create(
			<EditMarkerContainer
					currentRegion={{latitude: 1, longitude: 1}}
					selectedMarker={{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});