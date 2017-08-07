import React from 'react';
import PictureList from '../../App/Components/Common/PictureList';
import renderer from 'react-test-renderer';

test('picturelist renders correctly', () => {
  const tree = renderer.create(
    <PictureList data = {[]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
