import 'react-native';
import React from 'react';
import FilterSettings from  '../App/Components/FilterSettings';
import renderer from 'react-test-renderer';

test('FilterSettings renders correctly', () => {
	const tree = renderer.create(
			<FilterSettings data = {[{
				name: "Violence",
				stateDescription: "Show violent content"
			}]}/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
