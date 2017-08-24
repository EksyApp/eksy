import React from 'react'
import { BottomSheetContainer } from '../../App/Containers/MainView/BottomSheet/BottomSheetContainer'
import renderer from 'react-test-renderer'

jest.mock('../../App/Containers/MainView/BottomSheet/RouteInfo/RouteInfoContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/BottomSheet/MarkersInfo/MarkersInfoContainer', () => {
	return require('react-native').View
})


test('BottomSheetContainer renders correctly', () => {
	const tree = renderer.create(
			<BottomSheetContainer
					markerList = {[{latitude: 1, longitude: 1, title: "", text: ""}]}
					routeIsActive
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});