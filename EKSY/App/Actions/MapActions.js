import {UPDATE_CURRENT_REGION, UPDATE_CURRENT_LOCATION} from './Types'


export const updateRegion = (region) => {
  return {
    type: UPDATE_CURRENT_REGION,
    region: region
  }
}

export const updateLocation = (position) => {
  return {
    type: UPDATE_CURRENT_LOCATION,
    position: position
  }
}
