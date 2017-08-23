import React from 'react';
import renderer from 'react-test-renderer';
import Route from "../../App/Components/Common/RouteMap";

jest.mock('react-native-maps', () => {
	const React = require.requireActual('react');
	const MapView = require.requireActual('react-native-maps');
	
	class MockCallout extends React.Component {
		render() {
			return React.createElement('Callout', this.props, this.props.children);
		}
	}
	
	class MockMarker extends React.Component {
		render() {
			return React.createElement('Marker', this.props, this.props.children);
		}
	}
	
	class MockMapView extends React.Component {
		render() {
			return React.createElement('MapView', this.props, this.props.children);
		}
	}
	
	class MockMapViewAnimated extends React.Component {
		render() {
			return React.createElement('MapView', this.props, this.props.children);
		}
	}
	
	class MockPolyline extends React.Component {
		render() {
			return React.createElement('Polyline', this.props, this.props.children);
		}
	}
	
	MockCallout.propTypes = MapView.Callout.propTypes;
	MockMarker.propTypes = MapView.Marker.propTypes;
	MockMapView.propTypes = MapView.propTypes;
	MockMapView.Marker = MockMarker;
	MockMapView.Callout = MockCallout;
	MockMapView.Animated = MockMapViewAnimated;
	MockMapView.Polyline = MockPolyline;
	return MockMapView;
});

test('RouteMap renders correctly', () => {
	const tree = renderer.create(
			<Route
					initialRegion = {{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
					markers = {[{latitude: 1, longitude: 1}]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});