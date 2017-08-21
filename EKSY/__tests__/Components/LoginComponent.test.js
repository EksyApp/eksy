import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginComponent from "../../App/Components/Auth/LoginComponent";

test('LoginComponent renders correctly', () => {
	const tree = renderer.create(
			<LoginComponent
					onEmailChange = {() => {} }
					onPasswordChange = {() => {} }
					onLoginClick = {() => {} }
					response = ''
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});