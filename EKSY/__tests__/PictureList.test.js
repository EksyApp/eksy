import 'react-native';
import React from 'react';
import PictureList from '../App/Components/PictureList';
import renderer from 'react-test-renderer';

test('picturelist renders correctly', () => {
  const tree = renderer.create(
    <PictureList data = {[{width: 320, height: 240, uri: 'http://www.catpic.com'}]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
