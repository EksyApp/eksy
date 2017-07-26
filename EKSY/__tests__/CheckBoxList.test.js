import 'react-native';
import React from 'react';
import CheckBoxList from  '../App/Components/CheckBoxList';
import renderer from 'react-test-renderer';

test('CheckBoxList renders correctly', () => {
    const tree = renderer.create(
        <CheckBoxList data = {[{
            name: "Violence",
            stateDescription: "Show violent content"
        }]}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
