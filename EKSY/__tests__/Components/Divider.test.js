import 'react-native';
import React from 'react';
import { Divider } from '../../App/Components/Common/index';
import renderer from 'react-test-renderer';

test('divider renders correctly', () => {
  const tree = renderer.create(
    <Divider />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
