import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserMarkersComponent from "../../App/Components/Settings/UserMarkersComponent";

test('UserMarkersComponent renders correctly when not loading', () => {
	const tree = renderer.create(
			<UserMarkersComponent
			userMarkers={[{
				filters: [],
				images : [],
				key: '' ,
				latitude: 1,
				longitude: 1,
				status: 1 ,
				text:  '' ,
				title:  ''
			}]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

test('UserMarkersComponent renders correctly when loading', () => {
	const tree = renderer.create(
			<UserMarkersComponent
					userMarkers={[{
						filters: [],
						images : [],
						key: '' ,
						latitude: 1,
						longitude: 1,
						status: 1 ,
						text:  '' ,
						title:  ''
					}]}
					loading
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});