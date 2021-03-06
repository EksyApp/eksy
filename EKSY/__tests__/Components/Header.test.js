import 'react-native';
import React from 'react';
import { Header } from '../../App/Components/Common/index';
import renderer from 'react-test-renderer';

test('header renders correctly with backbutton value true', () => {
  const tree = renderer.create(
    <Header backButton/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('header renders correctly with backbutton value false', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
