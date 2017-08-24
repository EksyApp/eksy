import React from 'react'
import { SignUpContainer } from '../../App/Containers/Auth/SignUpContainer'
import renderer from 'react-test-renderer'

test('SignUpContainer renders correctly', () => {
	const tree = renderer.create(
			<SignUpContainer
					userCreated={() => {}}
					userLoggedIn={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});