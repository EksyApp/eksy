import ReactNative, { StyleSheet } from 'react-native';
import React from 'react';
import PointSelector from '../../App/Components/Common/PointSelector';
import renderer from 'react-test-renderer';

test('pointselector renders correctly', () => {
  const tree = renderer.create(
    <PointSelector initialRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}} style={StyleSheet.create({width: 10, height: 10})}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
