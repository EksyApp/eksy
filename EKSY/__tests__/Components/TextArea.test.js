import 'react-native';
import React from 'react';
import { TextArea } from '../../App/Components/Common/index';
import renderer from 'react-test-renderer';

describe("TextArea", () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextArea />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
