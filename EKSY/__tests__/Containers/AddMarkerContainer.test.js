import React from 'react'
import { AddMarkerContainer } from '../../App/Containers/AddMarker/AddMarkerContainer'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import AddMarkerComponent from "../../App/Components/AddMarker/AddMarkerComponent";

describe('AddMarkerContainer', () => {
	
	it('sets the state correctly', () => {
		
		let addMarkerContainer = shallow(<AddMarkerContainer currentRegion={{latitude: 1, longitude: 1}}/>)
		
		expect(addMarkerContainer.state()).toEqual({
			region: {latitude: 1, longitude: 1},
			text: '',
			title: '',
			images: [],
			filters: []})
	})
	
	it('addNewMarker calls dao.addMarker', () => {
		const addMarkerContainer = shallow(<AddMarkerContainer currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}/>)
		
		expect(addMarkerContainer.instance().dao.addMarker).toHaveBeenCalledTimes(0)
		
		addMarkerContainer.instance().addNewMarker();
		expect(addMarkerContainer.instance().dao.addMarker).toHaveBeenCalledTimes(1)
	})
	
	it('onFilterChange works correctly', () => {
		const addMarkerContainer = shallow(<AddMarkerContainer currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}/>)
		
		addMarkerContainer.find('AddMarkerComponent').simulate('FilterChange', "test", true)
		expect(addMarkerContainer.state().filters).toContain('test')
		
		addMarkerContainer.find('AddMarkerComponent').simulate('FilterChange', "test", false)
		expect(addMarkerContainer.state().filters).not.toContain('test')
	})
})

test('AddMarkerContainer renders correctly', () => {
	const tree = renderer.create(
			<AddMarkerContainer
					currentRegion={{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

