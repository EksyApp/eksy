import {MARKER_VISIBLE, MARKER_HIDDEN} from '../Actions/Types'

const initial = {
	array: []
}

export default function (state = initial, action) {
	switch (action.type) {
		case MARKER_VISIBLE:
			return {array: [...state.array, action.marker]}
		case MARKER_HIDDEN:
			let i = 0;
			while (i < state.array.length) {
				if (state.array[i].key === action.key) {
					break
				}
				i++
			}
			if (i < state.array.length) {
				return {
					array: [
						...state.array.splice(0, i),
						...state.array.splice(i + 1)
					]
				}
			}
			
			return state
		default:
			return state
	}
}
