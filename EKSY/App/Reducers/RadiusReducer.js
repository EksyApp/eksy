import {UPDATE_RADIUS} from '../Actions/Types'

const initial = 0.1

export default function (state = initial, action) {
	switch (action.type) {
		case UPDATE_RADIUS:
			return action.radius
		default:
			return state
	}
}