import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CompactPictureList from "../../App/Components/Common/CompactPictureList";

test('CompactPictureLit renders correctly', () => {
	const tree = renderer.create(
			<CompactPictureList
					data={[]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});