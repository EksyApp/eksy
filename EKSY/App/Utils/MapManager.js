import React from 'react'
import * as Actions from '../Actions/index'
import Store from '../Store/index'
import Dao from "../Dao/Dao";
import {PermissionsAndroid} from 'react-native'
//import BackgroundGeolocation from 'react-native-mauron85-background-geolocation'

let instance = null

// used to give commands to the Google Map
class MapManager {

	constructor() {
		if (!instance) {
			this._map = null
			this._reduxState = null
			this.dao = new Dao()
			this.initStore()
			instance = this
		}
		return instance
	}

	async initStore() {
		this.store = await Store()
		this.store.subscribe(() => this.storeListener())
		this.startLocationWatcher()
	}

	storeListener() {
		this._reduxState = this.store.getState()
	}

	async startLocationWatcher() {
		this._reduxState = this.store.getState()
		
		if(this._reduxState.map.location.isKnown && this._reduxState.map.location.latitude != null) {
			this.dao.updateLocation(this._reduxState.map.location.latitude, this._reduxState.map.location.longitude)
		}
		
		try {
			const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				this.watchID = navigator.geolocation.watchPosition(
						(position) => {
							this.dao.updateLocation(this._reduxState.map.location.latitude, this._reduxState.map.location.longitude)
							this.store.dispatch(Actions.updateLocation(position.coords))
							this.store.dispatch(Actions.locationKnown(true))
							this._map.forceUpdate()
						},
						(error) => this.store.dispatch(Actions.locationKnown(false)),
						{enableHighAccuracy: false, timeout: 500, maximumAge: 0, distanceFilter: 3}
				)
			} else {
				this.store.dispatch(Actions.locationKnown(false))
			}
		} catch (err) {
			this.store.dispatch(Actions.locationKnown(false))
		}
		
		
	}

	setMapObject(map) {
		this._map = map
	}

	goToCurrentPosition() {
		this.flyToPosition(this._reduxState.map.location.latitude, this._reduxState.map.location.longitude)
	}

	flyToPosition(latitude, longitude) {
		let position = {
			latitude: latitude,
			longitude: longitude
		}
		this._map.animateToCoordinate(position, 1000)
	}

}

export default MapManager
