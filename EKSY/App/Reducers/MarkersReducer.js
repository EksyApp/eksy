import markerList from './MarkerListReducer'
import markerSelected from './MarkerSelectedReducer'

import {combineReducers} from 'redux'

//Helper for export reducers
export default combineReducers({
	markerList, markerSelected
})
