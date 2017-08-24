import React from 'react'
import { MarkersInfoContainer } from '../../App/Containers/MainView/BottomSheet/MarkersInfo/MarkersInfoContainer'
import renderer from 'react-test-renderer'

test('MarkersInfoContainer renders correctly', () => {
	const tree = renderer.create(
			<MarkersInfoContainer
					setMarkerSelected={() => {}}
					setMarkerViewVisible={() => {}}
					disableGestures={() => {}}
					markerList = {[{latitude: 1, longitude: 1, title: "", text: ""}]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});