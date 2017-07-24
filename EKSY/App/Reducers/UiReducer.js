import drawer from './DrawerReducer'
import markerView from './MarkerViewReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  drawer, markerView
})
