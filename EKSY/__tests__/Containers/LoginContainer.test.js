import React from 'react'
import { LoginContainer } from '../../App/Containers/Auth/LoginContainer'
import renderer from 'react-test-renderer'

test('LoginContainer renders correctly', () => {
	const tree = renderer.create(
			<LoginContainer
					userLoggedIn={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});