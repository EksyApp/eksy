import {DRAWER_TOGGLE, DRAWER_OPEN, DRAWER_CLOSE, MARKERVIEW_VISIBLE, MARKERVIEW_HIDDEN, DISABLE_GESTURES} from './Types'

export const drawerToggle = () => {
  return {
    type: DRAWER_TOGGLE
  }
}

export const drawerOpen = () => {
  return {
    type: DRAWER_OPEN
  }
}

export const drawerClose = () => {
  return {
    type: DRAWER_CLOSE
  }
}

export const disableGestures = (value) => {
  return {
    type: DISABLE_GESTURES,
    disableGestures: value
  }
}

export const setMarkerViewVisible = () => {
  return {
    type: MARKERVIEW_VISIBLE
  }
}

export const setMarkerViewHidden = () => {
  return {
    type: MARKERVIEW_HIDDEN
  }
}
