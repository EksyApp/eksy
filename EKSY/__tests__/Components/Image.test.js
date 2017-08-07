import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Image from "../../App/Components/Common/Image";

test('Image renders correctly', () => {
	const tree = renderer.create(
			<Image />
	).toJSON();
	expect(tree).toMatchSnapshot();
});