// import 'react-native';
import React from 'react';
import MarkerCard from '../../App/Components/MainView/BottomSheet/MarkerCard';
import renderer from 'react-test-renderer';

test('MarkerCard renders correctly', () => {
  const tree = renderer.create(
    <MarkerCard marker={{title: '', text: ''}} width={100} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
