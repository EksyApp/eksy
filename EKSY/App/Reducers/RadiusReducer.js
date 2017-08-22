import {UPDATE_RADIUS} from '../Actions/Types'

//Updates the state of the radius that a marker is visible
const initial = 0.1

export default function (state = initial, action) {
	switch (action.type) {
		case UPDATE_RADIUS:
			return action.radius
		default:
			return state
	}
}
