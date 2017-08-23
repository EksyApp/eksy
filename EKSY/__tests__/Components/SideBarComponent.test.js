import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SideBarComponent from "../../App/Components/SideBar/SideBarComponent";

test('SideBarComponent renders correctly', () => {
	const tree = renderer.create(
			<SideBarComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});