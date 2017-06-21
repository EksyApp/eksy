import React from 'react'
import * as Actions from '../Actions'
import store from '../Store'
import Marker from './Marker'

let instance = null
let idCounter = 0

class MapManager {

	constructor() {
		if (!instance) {
			this._markers = new Map();
			this._map = null;
			this._currentLocationMoveRequested = false;
			this._reduxState = null;
			store.subscribe(() => this.storeListener())
			this.startLocationWatcher();
			instance = this;
		}
		return instance;
	}

	static getNextID () {
    idCounter++
    return idCounter
  }

	storeListener() {
		this._reduxState = store.getState();
		this.handleFlyingToCurrentLocation()
	}

	handleFlyingToCurrentLocation() {
		if (this._currentLocationMoveRequested) {
			this.goToCurrentPosition()
		}
	}

	startLocationWatcher() {
		navigator.geolocation.watchPosition(
				(position) => {
					store.dispatch(Actions.updateLocation(position.coords))
					store.dispatch(Actions.locationKnown(true))
					this._map.forceUpdate()
				},
				(error) => store.dispatch(Actions.locationKnown(false)),
				{enableHighAccuracy: true, timeout: 500, maximumAge: 500, distanceFilter: 10}
		)
	}

	addMarker(key, marker) {
		let markerComponent = <Marker title={marker.title} images={marker.images} latitude={marker.latitude} longitude={marker.longitude} text={marker.text} key={MapManager.getNextID()}/>
		this._markers.set(key, markerComponent);
		this._map.forceUpdate()
	}

	removeMarker(key) {
		this._markers.delete(key);
		this._map.forceUpdate()
	}

	getMarkers() {
		return this._markers;
	}

	setMapObject(map) {
		this._map = map;
	}

	goToCurrentPosition() {
		if (this._reduxState && this._reduxState.map.location.isKnown) {
			this._currentLocationMoveRequested = false
			this.flyToPosition(this._reduxState.map.location.latitude, this._reduxState.map.location.longitude)
		} else {
			this._currentLocationMoveRequested = true
		}
	}

	flyToPosition(latitude, longitude) {
		let position = {
			latitude: latitude,
			longitude: longitude,
		}
		this._map.animateToCoordinate(position, 1000)

	}

}

export default MapManager
