import {MARKER_SELECTED} from '../Actions/Types'

//Updates the state of user adding a marker
const initial = {
	marker: {
		latitude: null,
		longitude: null,
		color: "",
		text: "",
		title: "",
		images: [],
		filters: []
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
