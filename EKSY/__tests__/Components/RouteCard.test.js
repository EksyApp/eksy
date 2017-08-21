import React from 'react';
import RouteCard from '../../App/Components/Routes/RouteViewing/RouteCard';
import renderer from 'react-test-renderer';

test('RouteCard renders correctly', () => {
  const tree = renderer.create(
    <RouteCard route={{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
