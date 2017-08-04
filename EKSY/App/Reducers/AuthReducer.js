import {LOGIN, SIGNOUT} from '../Actions/Types'

const initialState = {
	user: null
}

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {...state, user: action.user}
		case SIGNOUT:
			return {...state, user: null}
		default:
			return state
	}
}
