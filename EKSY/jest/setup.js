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
	
	class MockCircle extends React.Component {
		render() {
			return React.createElement('Circle', this.props, this.props.children);
		}
	}
	
	MockCallout.propTypes = MapView.Callout.propTypes;
	MockMarker.propTypes = MapView.Marker.propTypes;
	MockMapView.propTypes = MapView.propTypes;
	MockMapView.Marker = MockMarker;
	MockMapView.Callout = MockCallout;
	MockMapView.Animated = MockMapViewAnimated;
	MockMapView.Polyline = MockPolyline;
	MockMapView.Circle = MockCircle;
	
	return MockMapView;
});


jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		fetch: () => {},
		base64: () => {},
		android: () => {},
		ios: () => {},
		config: () => {},
		session: () => {},
		fs: {
			dirs: {
				MainBundleDir: () => {},
				CacheDir: () => {},
				DocumentDir: () => {},
			},
		},
		wrap: () => {},
		polyfill: {
			Fetch: class Fetch {
				constructor(params) {
				
				}
				
				build = jest.fn()
			}
		},
		JSONStream: () => {}
	}
})

jest.mock('firebase', () => {
	
	const update = jest.fn(() => {
		return Promise.resolve()
	})
	
	const ref = jest.fn(() => {
		return {
			child: jest.fn(() => {
				return ref
			}),
			update: update
		}
	})
	
	return {
		initializeApp: jest.fn(),
		database: jest.fn(() =>{
			return {
				ref:ref
			}
		})
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