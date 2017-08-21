import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserRoutesComponent from "../../App/Components/Routes/RouteManaging/UserRoutesComponent";

test('UserRoutesComponent renders correctly', () => {
	const tree = renderer.create(
			<UserRoutesComponent routes = {[]}/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
