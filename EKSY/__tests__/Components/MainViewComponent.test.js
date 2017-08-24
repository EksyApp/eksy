import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MainViewComponent from "../../App/Components/MainView/MainViewComponent";

jest.mock('../../App/Containers/MainView/Map/MapContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/BottomSheet/BottomSheetContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/MarkerModal/MarkerModalContainer', () => {
	return require('react-native').View
})

test('MainViewComponent renders correctly', () => {
	const tree = renderer.create(
			<MainViewComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});