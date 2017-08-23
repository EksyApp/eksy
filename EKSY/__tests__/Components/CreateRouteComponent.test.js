import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CreateRouteComponent from "../../App/Components/Routes/RouteManaging/CreateRouteComponent";

test('CreateRouteComponent renders correctly', () => {
  const tree = renderer.create(
    <CreateRouteComponent markers={[{latitude: 1, longitude: 1}]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
