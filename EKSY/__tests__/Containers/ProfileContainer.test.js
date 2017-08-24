import React from 'react'
import { ProfileContainer } from '../../App/Containers/Settings/ProfileContainer'
import renderer from 'react-test-renderer'

test('ProfileContainer renders correctly', () => {
	const tree = renderer.create(
			<ProfileContainer
					userSignedOut={() => {}}
					user={{firebaseUser: {}}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});