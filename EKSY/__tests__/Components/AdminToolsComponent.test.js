import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AdminToolsComponent from "../../App/Components/Admin/AdminToolsComponent";

test('UserMarkersComponent renders correctly', () => {
  const tree = renderer.create(
    <AdminToolsComponent />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
