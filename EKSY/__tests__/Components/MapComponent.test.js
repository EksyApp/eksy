import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MapComponent from "../../App/Components/MainView/Map/MapComponent";
import MapManager from "../../App/Utils/MapManager";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

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
	
	MockCallout.propTypes = MapView.Callout.propTypes;
	MockMarker.propTypes = MapView.Marker.propTypes;
	MockMapView.propTypes = MapView.propTypes;
	MockMapView.Marker = MockMarker;
	MockMapView.Callout = MockCallout;
	MockMapView.Animated = MockMapViewAnimated;
	return MockMapView;
});

test('MapComponent renders correctly', () => {
	const tree = renderer.create(
			<MapComponent
					currentRegion={{
						latitude: 1,
						longitude: 1,
						latitudeDelta: 1
					}}
			    
			    currentLocation={{
			    	isKnown: false
			    }}
			    
			    markerList={[]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});