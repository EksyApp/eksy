import {UPDATE_CURRENT_REGION, UPDATE_CURRENT_LOCATION, LOCATION_KNOWN, MARKER_SELECTED, MARKER_ADDED} from './Types'
import Dao from '../Dao/Dao'

export const updateRegion = (region) => {
  return {
    type: UPDATE_CURRENT_REGION,
    region: region
  }
}

export const updateLocation = (position) => {
  let dao = new Dao()
  dao.updateLocation(position.latitude, position.longitude)
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

export const setSelectedMarker = (marker) => {
  return {
    type: MARKER_SELECTED,
    marker: marker
  }
}

export const addNewMarker = (marker) => {
  let dao = new Dao()
  dao.addMarker(marker)
  return {
    type: MARKER_ADDED,
    marker: marker
  }
}
