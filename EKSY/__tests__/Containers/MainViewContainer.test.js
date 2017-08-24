import React from 'react'
import { MainViewContainer } from '../../App/Containers/MainView/MainViewContainer'
import renderer from 'react-test-renderer'

jest.mock('../../App/Containers/MainView/Map/MapContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/BottomSheet/BottomSheetContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/MarkerModal/MarkerModalContainer', () => {
	return require('react-native').View
})

test('MainViewContainer renders correctly', () => {
	const tree = renderer.create(
			<MainViewContainer
					menuButtonPress={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});