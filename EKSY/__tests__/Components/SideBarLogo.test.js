import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SideBarLogo from "../../App/Components/SideBar/SideBarLogo";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})

test('SideBarLogo renders correctly', () => {
	const tree = renderer.create(
			<SideBarLogo />
	).toJSON();
	expect(tree).toMatchSnapshot();
});