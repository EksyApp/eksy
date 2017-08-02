import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreenComponent from "../../App/Components/Auth/LoginComponent";

test('LoginComponent renders correctly', () => {
	const tree = renderer.create(
			<LoginComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});