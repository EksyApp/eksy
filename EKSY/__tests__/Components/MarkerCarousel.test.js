import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerCarousel from "../../App/Components/MainView/MarkerCarousel";

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

test('MarkerCarousel renders correctly', () => {
	const tree = renderer.create(
			<MarkerCarousel markerList={[]} />
	).toJSON();
	expect(tree).toMatchSnapshot();
});