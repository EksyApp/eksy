import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ViewMoreText from "../../App/Components/Common/ViewMoreText";

test('ViewMoreText renders correctly when numberOfLines null', () => {
	const tree = renderer.create(
			<ViewMoreText
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

test('ViewMoreText renders correctly when numberOfLines not null', () => {
	const tree = renderer.create(
			<ViewMoreText
			numberOfLines={1}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});