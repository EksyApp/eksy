import 'react-native';
import React from 'react';

jest.unmock('ScrollView')

import {MarkerView} from '../App/Containers/MarkerView';
import renderer from 'react-test-renderer';

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: () => {}
    }
  })

test('MarkerView renders correctly', () => {

  const tree = renderer.create(
    <MarkerView marker={{title: 'test', text: 'text'}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
