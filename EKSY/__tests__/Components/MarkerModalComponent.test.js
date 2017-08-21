import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerModalComponent from "../../App/Components/MainView/MarkerModal/MarkerModalComponent";

test('MarkerModalComponent renders correctly', () => {
  const tree = renderer.create(
    <MarkerModalComponent marker={{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
