import React from 'react'
import 'react-native'
import { LoginContainer } from '../../App/Containers/Auth/LoginContainer'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: () => {}
    }
  })

jest.mock('firebase', () => ({
  auth () {
    return {
      createUserWithEmailAndPassword: jest.fn(),
      signInWithEmailAndPassword: jest.fn()
    }
  }
}))

describe('LoginContainer', () => {

/*  it('Runs login() when the login button is pressed', () => {
    let loginMock = jest.fn()
    let loginScreen = shallow(<LoginContainer />)
    loginScreen.instance().login = loginMock
    loginScreen.update()
    //onko Button oikein? Löytääkö oikean elementin?
    loginScreen.find('Button').first().simulate('press')
    expect(loginMock.mock.calls.length).toBe(1)
  })

  it('Runs signup() when the signup button is presses', () => {
    let signupMock = jest.fn()
    let loginScreen = shallow(<LoginContainer />)
    loginScreen.instance().signup = signupMock
    loginScreen.update()
    //onko Button oikein? Löytääkö oikean elementin?
    loginScreen.find('Button').last().simulate('press')
    expect(signupMock.mock.calls.length).toBe(1)
  })*/

  it('changes response when login() is called', () => {
    let loginScreen = shallow(<LoginContainer />)
    let responseAtFirst = loginScreen.instance().state.response
    return loginScreen.instance().login().then(() => {
      expect(loginScreen.instance().state.response).not.toEqual(responseAtFirst)
    })
  })
})
