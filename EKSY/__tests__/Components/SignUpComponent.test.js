import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SignUpComponent from "../../App/Components/Auth/SignUpComponent";

test('SignUpComponent renders correctly', () => {
	const tree = renderer.create(
			<SignUpComponent
					onSignupClick={() => {}}
					onEmailChange = {() => {}}
					onUsernameChange = {() => {}}
					onPasswordChange = {() => {}}
					onConfirmPasswordChange = {() => {}}
					response = ''
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});