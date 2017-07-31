import React from 'react';
import { MainViewContainer } from '../App/Containers/MainView/MainViewContainer';
import MapManager from '../App/Utils/MapManager';
import renderer from 'react-test-renderer';

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

jest.mock('../App/Containers/MarkerView', () => {
  return require('react-native').View
})

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
        return (<View></View>);
      }
    }
    MockCarousel.style = {}
    return MockCarousel
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

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  MockMapView.Animated = MockMapViewAnimated;
  return MockMapView;
});

describe('MainViewContainer renders correctly', () => {
 it('renders correctly', () => {
   const rendered = renderer.create(
     <MainViewContainer currentRegion={{latitudeDelta:1}} currentLocation={{isKnown:false}} markerList={[]} />
   );
   expect(rendered.toJSON()).toMatchSnapshot();
 });
});
