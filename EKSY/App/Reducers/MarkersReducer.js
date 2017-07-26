import markerList from './MarkerListReducer'
import markerSelected from './MarkerSelectedReducer'

import {combineReducers} from 'redux'

export default combineReducers({
	markerList, markerSelected
})
