import React from 'react'
import { AddMarkerContainer } from '../../App/Containers/AddMarker/AddMarkerContainer'
import {shallow, mount} from 'enzyme'
import renderer from 'react-test-renderer'
import Dao from "../../App/Dao/Dao";

// jest.mock('../../App/Dao/Dao', () => {
// 	return Dao
// })
//
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
//
// 	test('addNewMarker calls dao.addMarker', () => {
// 		const addMarkerContainer = mount(<AddMarkerContainer currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}/>)
//
// 		addMarkerContainer.addNewMarker();
// 		expect(Dao.addMarker()).toHaveBeenCalled()
// 	})
//
})

test('AddMarkerContainer renders correctly', () => {
	const tree = renderer.create(
			<AddMarkerContainer
					currentRegion={{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});