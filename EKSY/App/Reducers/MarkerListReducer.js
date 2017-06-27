import {MARKER_VISIBLE, MARKER_HIDDEN} from '../Actions/Types'

const initial = {}

export default function(state = initial, action) {
	switch(action.type) {
		case MARKER_VISIBLE:
			let newState = {...state}
			newState[action.marker.key] = action.marker
			return newState
		case MARKER_HIDDEN:
			return state.filter((marker) => marker.key !== action.key)
		default:
			return state
	}
}