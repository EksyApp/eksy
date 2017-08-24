import React from 'react'
import { MarkerModalContainer } from '../../App/Containers/MainView/MarkerModal/MarkerModalContainer'
import renderer from 'react-test-renderer'

test('MarkerModalContainer renders correctly', () => {
	const tree = renderer.create(
			<MarkerModalContainer
					markerViewVisible
					marker = {{latitude: 2, longitude: 1, title: "", text: ""}}
					setMarkerViewHidden={() => {}}
					routeIsActive
					user={{}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});