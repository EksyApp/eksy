import Dao from '../Dao/Dao'
import {ROUTE_SELECTED} from './Types'

export const setRouteSelected = (route) => {
	let dao = new Dao()
	if(dao.selectedRouteKey !== route.key) {
		dao.listenAsSelectedRoute(route.key)
	}
	return {
		type: ROUTE_SELECTED,
		route
	}
}