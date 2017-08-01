import 'react-native';
import React from 'react';
import { Input } from '../../App/Components/Common/index';
import renderer from 'react-test-renderer';

test('input renders correctly', () => {
  const tree = renderer.create(
    <Input />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
