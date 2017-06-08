import {combineReducers} from 'redux'
import auth from './AuthReducer'
// import locations from './LocationsReducer'
import ui from './UiReducer'
import map from './MapReducer'

export default combineReducers(
  {auth, ui, map}
)
