import React from 'react'
import { LoginContainer } from '../../App/Containers/Auth/LoginContainer'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import {Actions} from 'react-native-router-flux'

describe('LoginContainer', () => {
	
	it('login is working correctly', () => {
		const loginContainer = shallow(<LoginContainer/>)
		
		loginContainer.instance().login().then(() => {
			expect(loginContainer.state().response).toBe('Logged In!')
		})
	})
})

test('LoginContainer renders correctly', () => {
	const tree = renderer.create(
			<LoginContainer
					userLoggedIn={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});