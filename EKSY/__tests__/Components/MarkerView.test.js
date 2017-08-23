import React from 'react';
import renderer from 'react-test-renderer';
import MarkerView from "../../App/Components/Common/MarkerView";

test('MarkerView renders correctly', () => {
	const tree = renderer.create(
			<MarkerView
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