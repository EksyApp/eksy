import {LOGIN, USER_CREATED} from './Types'
import Dao from '../Dao/Dao'

export const userCreated = () => {
	let dao = new Dao();
	dao.addUser()
	return {
		type: USER_CREATED,
	}
}

export const userLoggedIn = (user) => {
	return {
		type: LOGIN,
		user: user
	}
}

export const userLoggedOut = () => {
	return {
		type: LOGIN,
	}
}