import location from './LocationReducer'
import currentRegion from './CurrentRegionReducer'
import radius from './RadiusReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  location, currentRegion, radius
})
