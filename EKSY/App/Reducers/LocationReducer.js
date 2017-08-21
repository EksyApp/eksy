import {UPDATE_CURRENT_LOCATION, LOCATION_KNOWN} from '../Actions/Types'

//Updates the state of user's location if known
const initial = {
  latitude: 60.184356,
  longitude: 24.949326,
  isKnown: false
}

export default function(state = initial, action) {
  switch(action.type) {
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        latitude: action.position.latitude,
        longitude: action.position.longitude
      }
    case LOCATION_KNOWN:
      return {
        ...state,
        isKnown: action.isKnown
      }
    default:
     return state
  }
}
