import React from 'react'
import { AdminToolsContainer } from '../../App/Containers/Admin/AdminToolsContainer'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import {Actions} from 'react-native-router-flux'


describe('AdminToolsContainer', () => {
	it('handleRadius is working correctly', () => {
		
		let updateRadius = jest.fn()
		
		const adminToolsContainer = shallow(<AdminToolsContainer
				updateRadius={updateRadius}
				radius={0.1}
		/>)
		
		adminToolsContainer.find('AdminToolsComponent').simulate('RadiusChange', "200")
		expect(updateRadius).toHaveBeenLastCalledWith(0.2)
		
		adminToolsContainer.find('AdminToolsComponent').simulate('RadiusChange', "jijiji")
		adminToolsContainer.find('AdminToolsComponent').simulate('RadiusChange', "-100")
		
		expect(updateRadius).toHaveBeenCalledTimes(1)
	})
	
	it('confirmClick is working correctly', () => {
		const adminToolsContainer = shallow(<AdminToolsContainer
		/>)
		
		adminToolsContainer.find('AdminToolsComponent').simulate('ConfirmClick')
		expect(Actions.adminConfirmMarkers).toHaveBeenCalled()
		
	})
})


test('AdminToolsContainer renders correctly', () => {
	const tree = renderer.create(
			<AdminToolsContainer
					updateRadius={() => {}}
					radius={10}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});