import React from 'react'
import { RoutesOfMarkerContainer } from '../../App/Containers/Routes/RouteViewing/RoutesOfMarkerContainer'
import renderer from 'react-test-renderer'

test('RoutesOfMarkerContainer renders correctly', () => {
	const tree = renderer.create(
			<RoutesOfMarkerContainer
					marker={{latitude: 1, longitude: 1}}
					setActiveRoute={() => {}}
					setNextMarker={() => {}}
					routeIsActive
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});