jest.mock('Linking', () => {
	return {
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		openURL: jest.fn(),
		canOpenURL: jest.fn(),
		getInitialURL: jest.fn(),
		requestPermissions: jest.fn(),
		configure: jest.fn()
	}
})

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

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})