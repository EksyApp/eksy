import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CompactPictureList from "../../App/Components/Common/CompactPictureList";

test('CompactPictureList renders correctly when data not null', () => {
	const tree = renderer.create(
			<CompactPictureList
					data={[]}
					listStyle = {{}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

test('CompactPictureList renders correctly when data null', () => {
	const tree = renderer.create(
			<CompactPictureList
					listStyle = {{}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});