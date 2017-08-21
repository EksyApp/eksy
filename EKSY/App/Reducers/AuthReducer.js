import {LOGIN, SIGNOUT} from '../Actions/Types'

//Updates the user's state of login/logout
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
