import React from 'react';
import RouteForm from '../../App/Components/Routes/RouteManaging/RouteForm';
import renderer from 'react-test-renderer';

test('RouteForm renders correctly', () => {
  const tree = renderer.create(
    <RouteForm markers = {[{latitude: 1, longitude: 1}]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
