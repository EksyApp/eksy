import {MARKER_SELECTED, MARKER_VISIBLE, MARKER_HIDDEN, FILTER_ADDED, FILTER_REMOVED} from './Types'
import Dao from '../Dao/Dao'

export const setMarkerSelected = (marker) => {
	let dao = new Dao()
	if(dao.selectedMarkerKey !== marker.key) {
		dao.listenAsSelectedMarker(marker.key)
	}
	return {
		type: MARKER_SELECTED,
		marker: marker
	}
}

export const setMarkerVisible = (marker) => {
	return {
		type: MARKER_VISIBLE,
		marker: marker,
	}
}

export const setMarkerHidden = (key) => {
	return {
		type: MARKER_HIDDEN,
		key: key,
	}
}

export const addFilter = (filter) => {
	return {
		type: FILTER_ADDED,
		filter: filter
	}
}

export const removeFilter = (filter) => {
	return {
		type: FILTER_REMOVED,
		filter: filter
	}
}
