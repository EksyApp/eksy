import {FILTER_ADDED, FILTER_REMOVED} from '../Actions/Types'

const initial = []

export default function (state = initial, action) {
	switch (action.type) {
		case FILTER_ADDED:
			return [...state, action.filter]
		case FILTER_REMOVED:
			return state.filter(filter => {
				filter !== action.filter
			})
		default:
			return state
	}
}