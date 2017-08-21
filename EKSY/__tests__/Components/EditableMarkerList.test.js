import React from 'react';
import EditableMarkerList from '../../App/Components/Routes/RouteManaging/EditableMarkerList';
import renderer from 'react-test-renderer';

test('EditableMarkerList renders correctly', () => {
  const tree = renderer.create(
    <EditableMarkerList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
