import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {CardSection} from "../../App/Components/Common/CardSection";

test('CardSection renders correctly', () => {
	const tree = renderer.create(
			<CardSection />
	).toJSON();
	expect(tree).toMatchSnapshot();
});