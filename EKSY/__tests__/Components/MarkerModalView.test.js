import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerModalView from "../../App/Components/MainView/MarkerModal/MarkerModalView";

test('MarkerModalView renders correctly', () => {
  const tree = renderer.create(
    <MarkerModalView marker={{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
