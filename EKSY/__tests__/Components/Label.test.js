import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Label from "../../App/Components/Common/Label";

test('Label renders correctly', () => {
	const tree = renderer.create(
			<Label />
	).toJSON();
	expect(tree).toMatchSnapshot();
});