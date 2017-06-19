import React from 'react'
import 'react-native'
import { LoginScreen } from '../App/Containers/LoginScreen'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

jest.mock('firebase', () => ({
  auth () {
    return {
      createUserWithEmailAndPassword: jest.fn(),
      signInWithEmailAndPassword: jest.fn()
    }
  }
}))

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
     <LoginScreen/>
   ).toJSON();
   expect(tree).toMatchSnapshot();
  })

  it('Runs login() when the login button is pressed', () => {
    let loginMock = jest.fn()
    let loginScreen = shallow(<LoginScreen />)
    loginScreen.instance().login = loginMock
    loginScreen.update()
    //onko Button oikein? Löytääkö oikean elementin?
    loginScreen.find('Button').first().simulate('press')
    expect(loginMock.mock.calls.length).toBe(1)
  })

  it('Runs signup() when the signup button is presses', () => {
    let signupMock = jest.fn()
    let loginScreen = shallow(<LoginScreen />)
    loginScreen.instance().signup = signupMock
    loginScreen.update()
    //onko Button oikein? Löytääkö oikean elementin?
    loginScreen.find('Button').last().simulate('press')
    expect(signupMock.mock.calls.length).toBe(1)
  })

  it('changes response when login() is called', () => {
    let loginScreen = shallow(<LoginScreen />)
    let responseAtFirst = loginScreen.instance().state.response
    return loginScreen.instance().login().then(() => {
      expect(loginScreen.instance().state.response).not.toEqual(responseAtFirst)
    })
  })
})
