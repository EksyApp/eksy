import React from 'react'
import { SignUpContainer } from '../../App/Containers/Auth/SignUpContainer'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('SignUpContainer', () => {
	
	it('login is working correctly', () => {
		
		const signUpContainer = shallow(<SignUpContainer
		userCreated={jest.fn()}
		/>)
		
		signUpContainer.instance().signup().then(() => {
			expect(signUpContainer.state().response).toBe('Account created!')
		})
	})
})


test('SignUpContainer renders correctly', () => {
	const tree = renderer.create(
			<SignUpContainer
					userCreated={() => {}}
					userLoggedIn={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});