import React from 'react';

jest.unmock('ScrollView')

import Main from '../App/Containers/Main';
import 'react-native';
import renderer from 'react-test-renderer';
import MapManager from '../App/Containers/Map/MapManager';
import MapManagerMock from '../_mocks_/MapManagerMock';
import MapViewMock from '../_mocks_/MapViewMock';

jest.mock('react-native-code-push', () => {
    return jest.fn(() => ({
        InstallMode: jest.fn(),
        CheckFrequency: jest.fn(),
        CodePushComponent: jest.fn(),
        codePushify: jest.fn()
    }));
})

MapManagerMock()

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


test('main renders correctly', () => {
  const tree = renderer.create(
    <Main />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
