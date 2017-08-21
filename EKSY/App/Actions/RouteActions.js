import Dao from '../Dao/Dao'
import {ACTIVE_ROUTE, ROUTE_IS_ACTIVE, ROUTE_SELECTED} from './Types'

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

export const setRouteActive = (route) => {
	let dao = new Dao()
	if(dao.activeRouteKey !== route.key) {
		dao.listenAsActiveRoute(route.key)
	}
	return {
		type: ACTIVE_ROUTE,
		route
	}
}

export const routeIsActive = (status) => {
	return {
		type: ROUTE_IS_ACTIVE,
		active: status
	}
}