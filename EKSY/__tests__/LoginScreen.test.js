import React from 'react'
import 'react-native'
import { LoginScreenContainer } from '../App/Containers/Auth/LoginScreenContainer'
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

describe('LoginScreenContainer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
     <LoginScreenContainer/>
   ).toJSON();
   expect(tree).toMatchSnapshot();
  })

  it('Runs login() when the login button is pressed', () => {
    let loginMock = jest.fn()
    let loginScreen = shallow(<LoginScreenContainer />)
    loginScreen.instance().login = loginMock
    loginScreen.update()
    //onko Button oikein? Löytääkö oikean elementin?
    loginScreen.find('Button').first().simulate('press')
    expect(loginMock.mock.calls.length).toBe(1)
  })

  it('Runs signup() when the signup button is presses', () => {
    let signupMock = jest.fn()
    let loginScreen = shallow(<LoginScreenContainer />)
    loginScreen.instance().signup = signupMock
    loginScreen.update()
    //onko Button oikein? Löytääkö oikean elementin?
    loginScreen.find('Button').last().simulate('press')
    expect(signupMock.mock.calls.length).toBe(1)
  })

  it('changes response when login() is called', () => {
    let loginScreen = shallow(<LoginScreenContainer />)
    let responseAtFirst = loginScreen.instance().state.response
    return loginScreen.instance().login().then(() => {
      expect(loginScreen.instance().state.response).not.toEqual(responseAtFirst)
    })
  })
})
