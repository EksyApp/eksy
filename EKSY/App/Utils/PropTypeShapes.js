import PropTypes from 'prop-types';

export const RegionShape = PropTypes.shape({
	latitude: PropTypes.number,
	longitude: PropTypes.number,
	latitudeDelta: PropTypes.number,
	longitudeDelta: PropTypes.number
})

export const LocationShape = PropTypes.shape({
	latitude: PropTypes.number,
	longitude: PropTypes.number,
})

export const ImagesShape = PropTypes.arrayOf(PropTypes.shape({
	uri: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	fullPath: PropTypes.string
}))

export const FilterShape = PropTypes.shape({
	name: PropTypes.string,
	stateDescription: PropTypes.string,
	addingDescription: PropTypes.string,
	checked: PropTypes.bool
})

export const FiltersShape = PropTypes.arrayOf(FilterShape)

export const MarkerShape = PropTypes.shape({
	creationInfo: PropTypes.shape({
		createdAt: PropTypes.number,
		user: PropTypes.string
	}),
	editInfo: PropTypes.shape({
		lastEdited: PropTypes.number
	}),
	filter: PropTypes.arrayOf(PropTypes.string),
	images: ImagesShape,
	key: PropTypes.string ,
	latitude:PropTypes.number,
	longitude:PropTypes.number,
	status:PropTypes.number,
	text: PropTypes.string ,
	title: PropTypes.string,
	routes: PropTypes.object
})

export const UserShape = PropTypes.shape({
	admin: PropTypes.bool,
	markers: PropTypes.object,
	firebaseUser: PropTypes.object,
	routes: PropTypes.object
})

export const RouteShape = PropTypes.shape({
	title: PropTypes.string,
	text: PropTypes.string,
	markers: MarkersShape
})

export const RoutesShape = PropTypes.arrayOf(RouteShape)

export const MarkersShape = PropTypes.arrayOf(MarkerShape)

export const StyleShape = PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object), PropTypes.number, PropTypes.arrayOf(PropTypes.number)])

