import React from 'react';
import EditMarkerComponent from '../../App/Components/EditMarker/EditMarkerComponent';
import renderer from 'react-test-renderer';

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

test('EditMarkerComponent renders correctly', () => {
	const tree = renderer.create(
			<EditMarkerComponent
					initialRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
					onRegionChange={() => {}}
					
					initialTitle=""
					onTitleChange={() => {}}
					
					initialText=""
					onTextChange={() => {}}
					
					images={[]}
					onNewImage={() => {}}
					
					filters={[]}
					onFilterChange={() => {}}
					
					onSaveClick={() => {
					
					}}
					onDeleteClick={() => {
					
					}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

