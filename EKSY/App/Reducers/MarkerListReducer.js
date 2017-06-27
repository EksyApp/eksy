import {MARKER_VISIBLE} from '../Actions/Types'

let initial = []

export default function(state = initial, action) {
	switch(action.type) {
		case MARKER_VISIBLE:
			return [...state, action.marker]
		case MARKER_HIDDEN:
			let i = 0;
			while (i < state.length) {
				if(state[i].key === action.marker.key) {
					break;
				}
				i++
			}
			if(i < state.length) {
				return [
						...state.splice(0, i),
						...state.splice(i+1)
				]
			}
			return state
		default:
			return state
	}
}