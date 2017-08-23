import React from 'react'
import { AddMarkerContainer } from '../../App/Containers/AddMarker/AddMarkerContainer'
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

describe('AddMarkerContainer', () => {
	
	it('sets the region correctly', () => {
		
		let addMarkerContainer = shallow(<AddMarkerContainer currentRegion={{latitude: 1, longitude: 1}}/>)
		
		expect(addMarkerContainer.state()).toEqual({
			region: {latitude: 1, longitude: 1},
			text: '',
			title: '',
			images: [],
			filters: []})
	})
})
