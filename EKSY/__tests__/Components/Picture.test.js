import 'react-native';
import React from 'react';
import Picture from '../../App/Components/Common/Picture';
import renderer from 'react-test-renderer';


describe("Picture", () => {
  it('picture renders correctly', () => {
    const tree = renderer.create(
      <Picture data = {{width: 320, height: 240, uri: 'http://www.catpic.com'}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
