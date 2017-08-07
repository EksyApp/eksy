import 'react-native';
import React from 'react';
import FilterSettingsComponent from '../../App/Components/Settings/FilterSettingsComponent';
import renderer from 'react-test-renderer';

test('FilterSettingsComponent renders correctly', () => {
	const tree = renderer.create(
			<FilterSettingsComponent data = {[{
				name: "Violence",
				stateDescription: "Show violent content"
			}]}/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
