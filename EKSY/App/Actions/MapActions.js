import {UPDATE_CURRENT_REGION, UPDATE_CURRENT_LOCATION, LOCATION_KNOWN} from './Types'


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

export const locationKnown = (isKnown) => {
  return {
    type: LOCATION_KNOWN,
    isKnown: isKnown
  }
}
