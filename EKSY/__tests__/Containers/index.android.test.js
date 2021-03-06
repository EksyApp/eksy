import 'react-native';
// import React from 'react';
jest.unmock('ScrollView')

jest.mock('react-native-version-number', () => {
    return {
      appversion: 'test'
    }
})

jest.mock('react-native-code-push', () => {
    function MockCodePush(options = {}) {
      return jest.fn()
    }

    Object.assign(MockCodePush, {
      sync: jest.fn(),
      installMode: null,
      updateDialog: null,
      CheckFrequency: {
        ON_APP_RESUME: null
      },
      InstallMode: {
        IMMEDIATE: null
      }
    })

    return MockCodePush
})

import Index from '../../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

  jest.mock('react-native-snap-carousel', () => {
      return {
        style: {}
      }
    })

test.only('this will be the only test that runs', () => {
  expect(true).toBe(true);
});
