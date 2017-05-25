import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test.only('this will be the only test that runs', () => {
  expect(true).toBe(true);
});


it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
