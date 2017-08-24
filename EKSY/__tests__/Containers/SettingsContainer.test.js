import React from 'react'
import { SettingsContainer } from '../../App/Containers/Settings/SettingsContainer'
import renderer from 'react-test-renderer'

jest.mock('react-native-version-number', () => {
	return {
		appversion: 'test'
	}
})

jest.mock('react-native-code-push', () => {
	function MockCodePush(options = {}) {
		return jest.fn()
	}
	
	Object.assign(MockCodePush, {
		sync: jest.fn(),
		installMode: null,
		updateDialog: null,
		CheckFrequency: {
			ON_APP_RESUME: null
		},
		InstallMode: {
			IMMEDIATE: null
		}
	})
	
	return MockCodePush
})

jest.mock('../../App/Containers/Settings/FilterSettingsContainer', () => {
	return require('react-native').View
})

jest.mock('../../App/Containers/Settings/ProfileContainer', () => {
	return require('react-native').View
})

test('SettingsContainer renders correctly', () => {
	const tree = renderer.create(
			<SettingsContainer
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});