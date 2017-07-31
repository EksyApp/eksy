import React from 'react';

jest.unmock('ScrollView')

import {MarkerViewContainer} from '../App/Containers/MainView/MarkerViewContainer';
import renderer from 'react-test-renderer';

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: () => {}
    }
  })

test('MarkerViewContainer renders correctly', () => {

  const tree = renderer.create(
    <MarkerViewContainer marker={{title: 'test', text: 'text'}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
