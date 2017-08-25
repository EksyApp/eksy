import React from 'react'
import { EditMarkerContainer } from '../../App/Containers/EditMarker/EditMarkerContainer'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import {Actions} from 'react-native-router-flux'


describe('EditMarkerContainer', () => {
	
	it('onFilterChange is working correctly', () => {
		
		const editMarkerContainer = shallow(<EditMarkerContainer
				currentRegion={{latitude: 1, longitude: 1}}
				selectedMarker={{latitude: 1, longitude: 1, text: "text", title: "title", images: [], filters: []}}
		/>)
		
		editMarkerContainer.find('EditMarkerComponent').simulate('FilterChange', "test", true)
		expect(editMarkerContainer.state().filters).toContain('test')
		
		editMarkerContainer.find('EditMarkerComponent').simulate('FilterChange', "test", false)
		expect(editMarkerContainer.state().filters).not.toContain('test')
	})
	
	it('saveMarker is working correctly', () => {
		
		const selectedMarker = {latitude: 2, longitude: 2, text: "text", title: "title", images: [], filters: []}
		const editMarkerContainer = shallow(<EditMarkerContainer
				currentRegion={{latitude: 1, longitude: 1}}
				selectedMarker={selectedMarker}
		/>)
		
		editMarkerContainer.find('EditMarkerComponent').simulate('SaveClick')
		expect(editMarkerContainer.instance().dao.updateMarker).toHaveBeenCalled()
		
	})
})

test('EditMarkerContainer renders correctly', () => {
	const tree = renderer.create(
			<EditMarkerContainer
					currentRegion={{latitude: 1, longitude: 1}}
					selectedMarker={{latitude: 1, longitude: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});