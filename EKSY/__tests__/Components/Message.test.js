import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Message from "../../App/Components/Common/Message";

test('Message renders correctly', () => {
	const tree = renderer.create(
			<Message />
	).toJSON();
	expect(tree).toMatchSnapshot();
});