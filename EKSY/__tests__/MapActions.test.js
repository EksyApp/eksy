import * as actions from '../App/Actions/MapActions'
import * as types from '../App/Actions/Types'

describe('actions', () => {
  it('should create an action to update region', () => {
    const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    const expectedAction = {
      type: types.UPDATE_CURRENT_REGION,
      region
    }
    expect(actions.updateRegion(region)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to update location', () => {
    const position = {
      latitude: 37.78825,
      longitude: -122.4324
    }
    const expectedAction = {
      type: types.UPDATE_CURRENT_LOCATION,
      position
    }
    expect(actions.updateLocation(position)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action depending if location is known', () => {
    const isKnown = true
    const expectedAction = {
      type: types.LOCATION_KNOWN,
      isKnown
    }
    expect(actions.locationKnown(isKnown)).toEqual(expectedAction)
  })
})