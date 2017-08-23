import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MarkerViewComponent from "../../App/Components/Settings/MarkerViewComponent";

test('MarkerViewComponent renders correctly', () => {
	const tree = renderer.create(
			<MarkerViewComponent
					marker={{
						filters: [],
						images : [],
						key: '' ,
						latitude: 1,
						longitude: 1,
						status: 1 ,
						text:  '' ,
						title:  ''
					}}
					currentRegion= {{latitude: 1, longitude: 1, latitudeDelta: 1, longitudeDelta: 1}}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});