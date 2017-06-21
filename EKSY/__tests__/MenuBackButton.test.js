import 'react-native';
import React from 'react';
import MenuBackButton from '../App/Components/MenuBackButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme'


test('MenuBackButton renders correctly', () => {
  const tree = renderer.create(
    <MenuBackButton />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.mock('react-native-router-flux', () => ({
	Actions: {
		pop: jest.fn()
	}
}))

import { Actions } from 'react-native-router-flux'

test('when menubackbutton is pressed action.pop is called', () => {
  let menuBackButton = shallow(<MenuBackButton />)
  menuBackButton.find('Icon').first().simulate('press')
  expect(Actions.pop.mock.calls.length).toBe(1)
})
