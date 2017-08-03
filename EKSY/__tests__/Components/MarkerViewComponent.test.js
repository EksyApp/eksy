import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerViewComponent from "../../App/Components/MainView/MarkerView/MarkerViewComponent";

test('MarkerViewComponent renders correctly', () => {
	const tree = renderer.create(
			<MarkerViewComponent
					marker={{
						title: "Hieno marker",
						text: "Hieno tarina",
					}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});