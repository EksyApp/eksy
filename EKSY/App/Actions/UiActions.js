import {DRAWER_TOGGLE, DRAWER_OPEN, DRAWER_CLOSE, MARKERVIEW_VISIBLE, MARKERVIEW_HIDDEN} from './Types'

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
