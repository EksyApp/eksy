import {FILTER_ADDED, FILTER_REMOVED} from '../Actions/Types'
import Filters from '../Data/Filters'

const initial = [...Filters.mainFilters.map((filter) => filter.name )]

export default function (state = initial, action) {
	switch (action.type) {
		case FILTER_ADDED:
			return [...state, action.filter]
		case FILTER_REMOVED:
			return state.filter(filter => {
				return filter !== action.filter
			})
		default:
			return state
	}
}