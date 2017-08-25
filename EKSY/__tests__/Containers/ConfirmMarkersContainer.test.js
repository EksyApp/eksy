import React from 'react'
import { ConfirmMarkersContainer } from '../../App/Containers/Admin/ConfirmMarkersContainer'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import {Actions} from 'react-native-router-flux'

describe('ConfirmMarkersContainer', () => {
	
	it('onCardClick is working correctly', () => {
		let setMarkerSelected = jest.fn()
		let marker = {key: "key"}
		
		const confirmMarkersContainer = shallow(<ConfirmMarkersContainer
				setMarkerSelected={setMarkerSelected}
		/>)
		
		confirmMarkersContainer.find('ConfirmMarkersComponent').simulate('CardClick', marker)
		expect(Actions.adminMarkerView).toHaveBeenCalled()
		expect(setMarkerSelected).toHaveBeenCalledWith(marker)
		
	})
	
	it('refresh is calling getMarkers()', () => {
		let getMarkers = jest.fn()
		
		const confirmMarkersContainer = shallow(<ConfirmMarkersContainer
		/>)
		
		confirmMarkersContainer.instance().getMarkers= getMarkers
		
		confirmMarkersContainer.find('ConfirmMarkersComponent').simulate('Refresh')
		expect(getMarkers).toHaveBeenCalled()
		
	})
	
	it('getMarkers is working correctly', () => {
		const confirmMarkersContainer = shallow(<ConfirmMarkersContainer
		/>)
		
		confirmMarkersContainer.instance().getMarkers().then(() => {
			expect(confirmMarkersContainer.state().pendingMarkers).not.toBeNull()
		})
	})
})

test('ConfirmMarkersContainer renders correctly', () => {
	const tree = renderer.create(
			<ConfirmMarkersContainer
					setMarkerSelected={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});