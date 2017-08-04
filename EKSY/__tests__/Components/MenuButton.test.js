import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from "../../App/Components/Common/MenuButton";

test('MenuButton renders correctly', () => {
	const tree = renderer.create(
			<MenuButton />
	).toJSON();
	expect(tree).toMatchSnapshot();
});