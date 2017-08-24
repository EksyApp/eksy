import React from 'react'
import { AddMarkerContainer } from '../../App/Containers/AddMarker/AddMarkerContainer'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

// jest.mock('../../App/Dao/Dao', () => {
// 	const React = require.requireActual('react');
// 	const {View} = require('react-native')
//
// 	class MockDao extends React.Component {
//
// 		render() {
// 			return (<View {...this.props} />);
// 		}
// 	}
//
// 	return MockDao
// })

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

	// it('addNewMarker calls dao.addMarker', () => {
	// 	const addMarkerContainer = shallow(<AddMarkerContainer currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}/>)
	//
	// 	addMarkerContainer.addNewMarker();
	// 	expect(MockDao.calls.length).toBe(1)
	// })

})

test('AddMarkerContainer renders correctly', () => {
	const tree = renderer.create(
			<AddMarkerContainer
					currentRegion={{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});