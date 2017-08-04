import ReactNative, { StyleSheet } from 'react-native';
import React from 'react';
import PointSelector from '../../App/Components/Common/PointSelector';
import renderer from 'react-test-renderer';

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
      return React.createElement('Callout', this.props, this.props.children)
    }
  }

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children)
    }
  }

  class MockMapView extends React.Component {
    render() {
      return React.createElement('MapView', this.props, this.props.children)
    }
  }

  class MockAnimatedRegion extends React.Component {
    render() {
      return React.createElement('AnimatedRegion', this.props, this.props.children)
    }
  }

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockAnimatedRegion.propTypes = MapView.AnimatedRegion.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  MockMapView.AnimatedRegion = MockAnimatedRegion;
  return MockMapView;
});

test('pointselector renders correctly', () => {
  const tree = renderer.create(
    <PointSelector initialRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}} style={StyleSheet.create({width: 10, height: 10})}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
