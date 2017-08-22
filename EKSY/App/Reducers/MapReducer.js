import location from './LocationReducer'
import currentRegion from './CurrentRegionReducer'
import radius from './RadiusReducer'
import {combineReducers} from 'redux'

//Helper class to export reducers
export default combineReducers({
  location, currentRegion, radius
})
