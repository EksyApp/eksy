import React from 'react'
import { MarkerViewContainer } from '../../App/Containers/Settings/MarkerViewContainer'
import renderer from 'react-test-renderer'

test('MarkerViewContainer renders correctly', () => {
	const tree = renderer.create(
			<MarkerViewContainer
					marker = {{latitude: 2, longitude: 1, title: "", text: "", creationInfo:{createdAt: 1, user: ""}}}
					currentRegion={{latitude: 1, longitude: 1}}
					user={{firebaseUser: {}}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});