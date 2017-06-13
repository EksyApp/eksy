import {MARKER_SELECTED} from '../Actions/Types'

const initial = {
	marker: null
}

export default function(state = initial, action) {
	switch(action.type) {
		case UPDATE_CURRENT_LOCATION:
			return {
				...state,
				latitude: action.position.latitude,
				longitude: action.position.longitude
			}
		case LOCATION_KNOWN:
			return {
				...state,
				isKnown: action.isKnown
			}
		default:
			return state
	}
}