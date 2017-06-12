import * as Actions from '../Actions'
import store from '../Store'

let instance = null

class MapManager {
	
	constructor() {
		if (!instance) {
			this._markers = new Array();
			this._map = null;
			this._currentLocationMoveRequested = false;
			this._reduxState = null;
			store.subscribe(() => this.storeListener())
			this.startLocationWatcher();
			instance = this;
		}
		return instance;
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
				},
				(error) => store.dispatch(Actions.locationKnown(false)),
				{enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
		)
	}
	
	addMarker(marker) {
		this._markers.push(marker);
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
