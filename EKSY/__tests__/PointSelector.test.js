import ReactNative, { StyleSheet } from 'react-native';
import React from 'react';
import PointSelector from '../App/Components/PointSelector';
import renderer from 'react-test-renderer';
// import rnfbMock from '../_mocks_/react-native-fetch-blob-mock'
//
// rnfbMock();

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: () => {}
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

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  return MockMapView;
});

test('pointselector renders correctly', () => {
  const tree = renderer.create(
    <PointSelector currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}} style={StyleSheet.create({width: 10, height: 10})}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
