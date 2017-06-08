import {UPDATE_CURRENT_LOCATION} from '../Actions/Types'

const initial = {
  latitude: 60.184356,
  longitude: 24.949326,
}

export default function(state = initial, action) {
  switch(action.type) {
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        latitude: action.position.latitude,
        longitude: action.position.longitude
      }
    default:
     return state
  }
}
