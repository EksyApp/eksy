import location from './LocationReducer'
import currentRegion from './CurrentRegionReducer'
import selectedMarker from './SelectedMarkerReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  location, currentRegion, selectedMarker
})
