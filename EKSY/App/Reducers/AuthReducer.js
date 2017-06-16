import {LOGIN_SUCCESS, LOGIN_ERROR} from '../Actions/Types'

export default function(state = {}, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {...state, response: action.response, user: action.user}
    case LOGIN_ERROR:
      return {...state, response: action.response, user: null}
    default:
     return state
  }
}
