import 'react-native';
import React from 'react';
import Button from '../App/Components/Button';
import renderer from 'react-test-renderer';

test('button renders correctly', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
