import {DRAWER_OPEN, DRAWER_CLOSE, DRAWER_TOGGLE, DISABLE_GESTURES} from '../Actions/Types'

const initial = {
  drawerOpen: false
}

export default function(state = initial, action) {
  switch(action.type) {
    case DRAWER_OPEN:
      return {...state, drawerOpen: true, markerViewVisible: false}
    case DRAWER_CLOSE:
      return {...state, drawerOpen: false}
    case DRAWER_TOGGLE:
      return {...state, drawerOpen: !state.drawerOpen}
    case DISABLE_GESTURES:
      return {...state, disableGestures: action.disableGestures}
    default:
     return state
  }
}
