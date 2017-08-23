import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerForm from "../../App/Components/AddMarker/MarkerForm";

test('MarkerForm renders correctly', () => {
	const tree = renderer.create(
			<MarkerForm
					initialRegion={{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
					onRegionChange={() => {}}
					
					initialTitle=""
					onTitleChange={() => {}}
					
					initialText=""
					onTextChange={() => {}}
					
					images={[]}
					onNewImage={() => {}}
					
					filters={[]}
					onFilterChange={() => {}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});