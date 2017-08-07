import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ViewMoreText from "../../App/Components/Common/ViewMoreText";

test('ViewMoreText renders correctly', () => {
	const tree = renderer.create(
			<ViewMoreText />
	).toJSON();
	expect(tree).toMatchSnapshot();
});