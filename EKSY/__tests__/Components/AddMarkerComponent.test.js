import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AddMarkerComponent from "../../App/Components/AddMarker/AddMarkerComponent";

test('AddMarkerComponent renders correctly', () => {
	const tree = renderer.create(
			<AddMarkerComponent
				initialRegion={{latitude: 1, longitude: 1}}
			  filters={[]}
				onRegionChange = {() => {}}
				onTitleChange={() => {}}
				onTextChange={() => {}}
				images={[]}
				onNewImage={() => {}}
				onFilterChange={() => {}}
				onAddMarkerClick={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});