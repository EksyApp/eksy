import React from 'react'
import { NavigationDrawer } from '../../App/Containers/SideBar/NavigationDrawer'
import renderer from 'react-test-renderer'

jest.mock('../../App/Containers/SideBar/SideBarContainer', () => {
	return require('react-native').View
})

test('NavigationDrawer renders correctly', () => {
	const tree = renderer.create(
			<NavigationDrawer
					navigationState={{children: {}}}
					drawerClose={() => {}}
					drawerOpen
					disableGestures
					onNavigate={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});