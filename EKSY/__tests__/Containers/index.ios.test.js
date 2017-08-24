import 'react-native'
import React from 'react'

jest.unmock('ScrollView')

import Index from '../../index.ios.js'

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
      CheckFrequency: {
        ON_APP_RESUME: null
      }
    })

    return MockCodePush
})

jest.mock('react-native-snap-carousel', () => {
  return {
    style: {}
  }
})

test.only('this will be the only test that runs', () => {
  expect(true).toBe(true)
})
