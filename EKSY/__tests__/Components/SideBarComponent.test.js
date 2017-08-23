import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SideBarComponent from "../../App/Components/SideBar/SideBarComponent";

test('SideBarComponent renders correctly when no user is given', () => {
	const tree = renderer.create(
			<SideBarComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});

test('SideBarComponent renders correctly when user is given', () => {
	const tree = renderer.create(
			<SideBarComponent
			user={{}}/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});