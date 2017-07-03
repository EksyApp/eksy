import 'react-native';
import React from 'react';
import { Button } from '../App/Components/Common';
import renderer from 'react-test-renderer';

test('button renders correctly', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
