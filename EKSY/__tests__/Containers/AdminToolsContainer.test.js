import React from 'react'
import { AdminToolsContainer } from '../../App/Containers/Admin/AdminToolsContainer'
import renderer from 'react-test-renderer'

test('AdminToolsContainer renders correctly', () => {
	const tree = renderer.create(
			<AdminToolsContainer
					updateRadius={() => {}}
					radius={10}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});