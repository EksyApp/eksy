import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Marker from "../../App/Components/MainView/Marker";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})

test('Marker renders correctly', () => {
	const tree = renderer.create(
			<Marker data={{latitude: 1, longitude: 1}} />
	).toJSON();
	expect(tree).toMatchSnapshot();
});