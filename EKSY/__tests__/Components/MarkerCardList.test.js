import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerCardList from "../../App/Components/Common/MarkerCardList";

test('MarkerCardList renders correctly', () => {
	const tree = renderer.create(
			<MarkerCardList
					data={[]}
					onPress={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});