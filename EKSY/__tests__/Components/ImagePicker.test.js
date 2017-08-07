import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImagePicker from "../../App/Components/Common/ImagePicker";

test('ImagePicker renders correctly', () => {
	const tree = renderer.create(
			<ImagePicker />
	).toJSON();
	expect(tree).toMatchSnapshot();
});