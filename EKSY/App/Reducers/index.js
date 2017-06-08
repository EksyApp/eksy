import {combineReducers} from 'redux'
import auth from './AuthReducer'
// import locations from './LocationsReducer'
import ui from './UiReducer'

export default combineReducers(
  {auth, ui}
)
