import 'react-native';
import React from 'react';
import { TextInputArea } from '../../App/Components/Common/index';
import renderer from 'react-test-renderer';

describe("TextInputArea", () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextInputArea />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
