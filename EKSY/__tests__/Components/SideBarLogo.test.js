import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SideBarLogo from "../../App/Components/SideBar/SideBarLogo";

test('SideBarLogo renders correctly', () => {
	const tree = renderer.create(
			<SideBarLogo />
	).toJSON();
	expect(tree).toMatchSnapshot();
});