import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BottomSheetComponent from "../../App/Components/MainView/BottomSheet/BottomSheetComponent";

jest.mock('../../App/Containers/MainView/BottomSheet/RouteInfo/RouteInfoContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/BottomSheet/MarkersInfo/MarkersInfoContainer', () => {
	return require('react-native').View
})

jest.mock('react-native-snap-carousel', () => {
	const React = require.requireActual('react');
	const {View} = require('react-native')
	
	class MockCarousel extends React.Component {
		
		render() {
			return (<View {...this.props} />);
		}
	}
	MockCarousel.style = {}
	return MockCarousel
})

test('BottomSheetComponent renders correctly', () => {
	const tree = renderer.create(
			<BottomSheetComponent
					markerList={[]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});