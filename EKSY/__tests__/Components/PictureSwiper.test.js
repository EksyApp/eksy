import React from 'react';
import PictureSwiper from '../../App/Components/Common/PictureSwiper';
import renderer from 'react-test-renderer';

test('PictureSwiper renders correctly', () => {
	const tree = renderer.create(
			<PictureSwiper data = {[{width: 320, height: 240, uri: 'http://www.catpic.com'}]}/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
