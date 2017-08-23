import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileComponent from "../../App/Components/Settings/ProfileComponent";

test('ProfileComponent renders correctly', () => {
	const tree = renderer.create(
			<ProfileComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});