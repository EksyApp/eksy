import {ROUTE_SELECTED} from '../Actions/Types'

const initial = {
	text: '',
	title: '',
	markers: []
}

export default function (state = initial, action) {
	switch (action.type) {
		case ROUTE_SELECTED:
			return action.route
		default:
			return state
	}
}