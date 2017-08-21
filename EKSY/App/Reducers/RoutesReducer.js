import {combineReducers} from 'redux'
import routeSelected from './RouteSelectedReducer'
import routeActive from './RouteActiveReducer'

export default combineReducers(
		{routeSelected, routeActive}
)