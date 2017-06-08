import {UPDATE_CURRENT_REGION} from '../Actions/Types'

const initial = {
  latitude: 60.184356,
  longitude: 24.949326,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
}

export default function(state = initial, action) {
  switch(action.type) {
    case UPDATE_CURRENT_REGION:
      return {
        ...state,
        latitude: action.region.latitude,
        longitude: action.region.longitude,
        latitudeDelta: action.region.latitudeDelta,
        longitudeDelta: action.region.longitudeDelta
      }
    default:
     return state
  }
}
