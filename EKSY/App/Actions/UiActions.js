import {DRAWER_TOGGLE, DRAWER_OPEN, DRAWER_CLOSE} from './Types'

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
