import {MARKER_SELECTED} from '../Actions/Types'

const initial = {
	marker: {
		latitude: null,
		longitude: null,
		color: "",
		text: "",
		title: "",
		images: []
	}
}

export default function(state = initial, action) {
	switch(action.type) {
		case MARKER_SELECTED:
			return action.marker
		default:
			return state
	}
}