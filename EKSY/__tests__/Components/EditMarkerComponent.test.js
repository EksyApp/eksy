import React from 'react';
import EditMarkerComponent from '../../App/Components/EditMarker/EditMarkerComponent';
import renderer from 'react-test-renderer';

test('EditMarkerComponent renders correctly', () => {
	const tree = renderer.create(
			<EditMarkerComponent
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
					
					onSaveClick={() => {
					
					}}
					onDeleteClick={() => {
					
					}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

