import location from './LocationReducer'
import currentRegion from './CurrentRegionReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  location, currentRegion
})
