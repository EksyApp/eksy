import {combineReducers} from 'redux'
import auth from './AuthReducer'
import markers from './MarkersReducer'
import ui from './UiReducer'
import map from './MapReducer'
import filters from './FilterListReducer'
import routes from './RoutesReducer'

//helper class to export reducers
export default combineReducers(
  {auth, ui, map, markers, filters, routes}
)
