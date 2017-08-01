import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreenComponent from "../../App/Components/Auth/LoginScreenComponent";

test('LoginScreenComponent renders correctly', () => {
	const tree = renderer.create(
			<LoginScreenComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});