import {MARKERVIEW_VISIBLE, MARKERVIEW_HIDDEN} from '../Actions/Types'

//Updates the state of marker's visibility
const initial = {
  markerViewVisible: false
}

export default function (state = initial, action) {
  switch (action.type) {
    case MARKERVIEW_VISIBLE:
      return {...state, markerViewVisible: true}
    case MARKERVIEW_HIDDEN:
      return {...state, markerViewVisible: false}
    default:
      return state
  }
}
