import React from 'react'
import { SideBarContainer } from '../../App/Containers/SideBar/SideBarContainer'
import renderer from 'react-test-renderer'

test('SideBarContainer renders correctly', () => {
	const tree = renderer.create(
			<SideBarContainer
					goToMap={() => {}}
					goToUserSettings={() => {}}
					goToAddMarker={() => {}}
					goToLoginScreen={() => {}}
					goToAdminTools={() => {}}
					user={{firebaseUser: {}}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});