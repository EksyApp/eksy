import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AddToRouteComponent from "../../App/Components/Routes/RouteManaging/AddToRouteComponent";

test('AddToRouteComponent renders correctly', () => {
  const tree = renderer.create(
    <AddToRouteComponent routes={[]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
