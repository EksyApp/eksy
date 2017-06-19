import 'react-native';
import React from 'react';
import {MarkerView} from '../App/Containers/MarkerView';
import renderer from 'react-test-renderer';

test('MarkerView renders correctly', () => {
  const tree = renderer.create(
    <MarkerView marker={{title: 'test', text: 'moar test', images:[{width: 10, height: 10, uri:"test"}]}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
