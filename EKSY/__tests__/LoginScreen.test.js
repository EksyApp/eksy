import React from 'react'
import 'react-native'
import LoginScreen from '../App/Containers/LoginScreen'
import {shallow} from 'enzyme'

jest.mock('firebase', () => ({
  auth () {
    return {
      createUserWithEmailAndPassword: jest.fn(),
      signInWithEmailAndPassword: jest.fn()
    }
  }
}))

describe('LoginScreen', () => {
  it('Runs login() when the login button is pressed', () => {
    let loginMock = jest.fn()
    let loginScreen = shallow(<LoginScreen />)
    loginScreen.instance().login = loginMock
    loginScreen.update()
    loginScreen.find('[block=true]').first().simulate('press')
    expect(loginMock.mock.calls.length).toBe(1)
  })

  it('Runs signup() when the signup button is presses', () => {
    let signupMock = jest.fn()
    let loginScreen = shallow(<LoginScreen />)
    loginScreen.instance().signup = signupMock
    loginScreen.update()
    loginScreen.find('[block=true]').last().simulate('press')
    expect(signupMock.mock.calls.length).toBe(1)
  })

  it('changes response when login() is called', () => {
    let loginScreen = shallow(<LoginScreen />);
    let responseAtFirst = loginScreen.instance().state.response
    return loginScreen.instance().login().then(() => {
      expect(loginScreen.instance().state.response).not.toEqual(responseAtFirst)
    })
  })

})
