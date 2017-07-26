import React from 'react'
import 'react-native'
import {shallow} from 'enzyme'
import {SideBar} from '../App/Navigation/SideBar'

jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    polyfill: () => {},
  }
});

describe('sidebar', () => {

  it('when "Go to map" -button is pressed the function passed to goToMap-prop is executed', () => {
    let goToMapMock = jest.fn()
    let sideBar = shallow(<SideBar goToMap={goToMapMock}/>)
    sideBar.find('Button').first().simulate('press')
    expect(goToMapMock.mock.calls.length).toBe(1)
  })

  it('when "Add a marker" -button is pressed the function passed to goToAddMarker-prop is executed', () => {
    let goToAddMarkerMock = jest.fn()
    let sideBar = shallow(<SideBar goToAddMarker={goToAddMarkerMock}/>)
    sideBar.find('Button').at(2).simulate('press')
    expect(goToAddMarkerMock.mock.calls.length).toBe(1)
  })

  it('when "Login" -button is pressed the function passed to goToLoginScreen-prop is executed', () => {
    let goToLoginScreenMock = jest.fn()
    let sideBar = shallow(<SideBar goToLoginScreen={goToLoginScreenMock}/>)
    sideBar.find('Button').at(3).simulate('press')
    expect(goToLoginScreenMock.mock.calls.length).toBe(1)
  })
})
