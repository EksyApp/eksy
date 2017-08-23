import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EditRouteComponent from "../../App/Components/Routes/RouteManaging/EditRouteComponent";

test('EditRouteComponent renders correctly', () => {
  const tree = renderer.create(
    <EditRouteComponent markers={[{latitude: 1, longitude: 1}]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
