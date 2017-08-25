import React from 'react'
import { AdminMarkerViewContainer } from '../../App/Containers/Admin/AdminMarkerViewContainer'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import {Actions} from 'react-native-router-flux'

describe('AdminMarkerViewContainer', () => {
	
	it('acceptClick and RejectClick are working correctly', () => {
		const adminMarkerViewContainer = shallow(<AdminMarkerViewContainer
				currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
				marker={{key: "key"}}
		/>)
		
		adminMarkerViewContainer.find('AdminMarkerViewComponent').simulate('AcceptClick')
		expect(adminMarkerViewContainer.instance().dao.setMarkerStatus).toHaveBeenLastCalledWith("key", 1)
		
		adminMarkerViewContainer.find('AdminMarkerViewComponent').simulate('RejectClick')
		expect(adminMarkerViewContainer.instance().dao.setMarkerStatus).toHaveBeenLastCalledWith("key", -1)
		
	})
	
	it('editClick is working correctly', () => {
		const adminMarkerViewContainer = shallow(<AdminMarkerViewContainer
				currentRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
				marker={{key: "key"}}
		/>)
		
		adminMarkerViewContainer.find('AdminMarkerViewComponent').simulate('EditClick')
		expect(Actions.editMarker).toHaveBeenCalled()
	
	})
	
})

test('AdminMarkerViewContainer renders correctly', () => {
	const tree = renderer.create(
			<AdminMarkerViewContainer
					currentRegion={{latitude: 1, longitude: 1}}
					marker = {{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});