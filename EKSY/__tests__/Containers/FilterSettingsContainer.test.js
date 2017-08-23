import React from 'react'
import { FilterSettingsContainer } from '../../App/Containers/Settings/FilterSettingsContainer'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: {
			Fetch: class Fetch {
				constructor(params) {
				
				}
				
				build = jest.fn()
			}
		}
	}
})

describe('FilterSettingsContainer', () => {
	
	
	it('calls the props functions correctly with _handlePress', () => {
		
		addFilter = jest.fn()
		removeFilter = jest.fn()
		
		
		let filterSettingsContainer = shallow(<FilterSettingsContainer addFilter={addFilter} removeFilter={removeFilter} activeFilters={[]}/>)
		
		expect(addFilter.mock.calls.length).toBe(0)
		
		filterSettingsContainer.find('FilterSettingsComponent').simulate('press', "test", true)
		expect(addFilter.mock.calls.length).toBe(1)
		
		expect(removeFilter.mock.calls.length).toBe(0)
		
		filterSettingsContainer.find('FilterSettingsComponent').simulate('press', "test", false)
		expect(removeFilter.mock.calls.length).toBe(1)
	})
})