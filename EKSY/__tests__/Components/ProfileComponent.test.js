import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileComponent from "../../App/Components/Settings/ProfileComponent";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})


test('ProfileComponent renders correctly', () => {
	const tree = renderer.create(
			<ProfileComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});