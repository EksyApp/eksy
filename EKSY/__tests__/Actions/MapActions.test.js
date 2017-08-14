import * as actions from '../../App/Actions/MapActions'
import * as types from '../../App/Actions/Types'
import MapManager from '../../App/Utils/MapManager'
import FirebaseDao from '../../App/Dao/FirebaseDao'

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

FirebaseDao.prototype.updateLocation = jest.fn()

jest.mock('react-native-fetch-blob', () => {
    return {
      DocumentDir: () => {},
      polyfill: {
        Fetch: class Fetch {
          constructor(params) {

          }

          build = jest.fn()
        }
      }
    }
  })
  
jest.mock('firebase', () => ({
  initializeApp () {
    return {}
  },
  database () {
    return {
      ref() {
        return {}
      }
    }
  },
}))

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

  it('should create an action depending if location is known', () => {
    const isKnown = true
    const expectedAction = {
      type: types.LOCATION_KNOWN,
      isKnown
    }
    expect(actions.locationKnown(isKnown)).toEqual(expectedAction)
  })
})
