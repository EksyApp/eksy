import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SettingsComponent from "../../App/Components/Settings/SettingsComponent";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})

jest.mock('react-native-version-number', () => {
    return {
      appversion: 'test'
    }
})

jest.mock('../../App/Containers/Settings/FilterSettingsContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/Settings/ProfileContainer', () => {
	return require('react-native').View
})

test('SettingsComponent renders correctly', () => {
	const tree = renderer.create(
			<SettingsComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});
