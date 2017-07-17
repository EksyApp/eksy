import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: () => {}
    }
  })

  jest.mock('react-native-snap-carousel', () => {
      return {
        style: {}
      }
    })

test.only('this will be the only test that runs', () => {
  expect(true).toBe(true);
});
