import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmMarkersComponent from "../../App/Components/Admin/ConfirmMarkersComponent";

test('ConfirmMarkersComponent renders correctly', () => {
	const tree = renderer.create(
			<ConfirmMarkersComponent
					loading={true}
					pendingMarkers={[]}
					onRefresh={() => {}}
					onCardClick={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});