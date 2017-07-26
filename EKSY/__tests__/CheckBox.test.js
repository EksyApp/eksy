import 'react-native';
import React from 'react';
import { CheckBox } from '../App/Components/Common';
import renderer from 'react-test-renderer';

test('CheckBox renders correctly', () => {
    const tree = renderer.create(
        <CheckBox />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});