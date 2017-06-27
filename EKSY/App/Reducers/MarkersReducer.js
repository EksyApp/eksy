import markerList from './MarkerListReducer'
import selectedMarker from './SelectedMarkerReducer'
import {combineReducers} from 'redux'

export default combineReducers({
	markerList, selectedMarker
})