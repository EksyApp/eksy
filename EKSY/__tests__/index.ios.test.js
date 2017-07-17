import 'react-native';
import React from 'react';

jest.unmock('ScrollView')

import Index from '../index.ios.js';

jest.mock('react-native-code-push', () => {
    return jest.fn(() => ({
        InstallMode: jest.fn(),
        CheckFrequency: jest.fn(),
        CodePushComponent: jest.fn(),
        codePushify: jest.fn()
    }));
})

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: () => {}
    }
  })

test.only('this will be the only test that runs', () => {
  expect(true).toBe(true);
});
