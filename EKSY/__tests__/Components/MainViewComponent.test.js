import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MainViewComponent from "../../App/Components/MainView/MainViewComponent";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
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

jest.mock('../../App/Containers/MainView/MapContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/BottomSheetContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/MainView/MarkerViewContainer', () => {
	return require('react-native').View
})

test('MainViewComponent renders correctly', () => {
	const tree = renderer.create(
			<MainViewComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});