import {MARKER_ADDED, MARKER_SELECTED MARKER_VISIBLE, MARKER_HIDDEN} from './Types'
import Dao from '../Dao/Dao'

export const addNewMarker = (marker) => {
	let dao = new Dao()
	dao.addMarker(marker)
	return {
		type: MARKER_ADDED,
		marker: marker
	}
}

export const setSelectedMarker = (marker) => {
	return {
		type: MARKER_SELECTED,
		marker: marker
	}
}

export const makeMarkerVisible = (marker) => {
	return {
		type: MARKER_VISIBLE,
		marker: marker,
	}
}

export const makeMarkerHidden = (marker) => {
	return {
		type: MARKER_HIDDEN,
		marker: marker,
	}
}