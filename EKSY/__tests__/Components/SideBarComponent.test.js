import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SideBarComponent from "../../App/Components/SideBar/SideBarComponent";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})

test('SideBarComponent renders correctly', () => {
	const tree = renderer.create(
			<SideBarComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});