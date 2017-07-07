import {USER_CREATED} from './Types'
import Dao from '../Dao/Dao'

export const userCreated = () => {
	let dao = new Dao();
	dao.addUser()
	return {
		type: USER_CREATED,
	}
}