import {MARKER_VISIBLE, MARKER_HIDDEN} from '../Actions/Types'

const initial = []

export default function (state = initial, action) {
	switch (action.type) {
		case MARKER_VISIBLE:
			return [...state, action.marker]
		case MARKER_HIDDEN:
			return state.filter(marker => {
				return marker.key !== action.key
			})
		default:
			return state
	}
}
