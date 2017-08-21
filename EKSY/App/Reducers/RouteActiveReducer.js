import {ACTIVE_ROUTE, NEXT_MARKER, ROUTE_IS_ACTIVE} from '../Actions/Types'

const initial = {
	route: null,
	nextMarker: null,
	active: false
}

export default function (state = initial, action) {
	switch (action.type) {
		case ACTIVE_ROUTE:
			return {
				...state,
				route: action.route,
			}
		case NEXT_MARKER:
			return {
				...state,
				nextMarker: action.marker
			}
		case ROUTE_IS_ACTIVE:
			return {
				...state,
				active: action.active
			}
		default:
			return state
	}
}
