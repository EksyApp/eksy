import React from 'react'
import * as Actions from '../../Actions'
import Store from '../../Store'
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation'

let instance = null
let idCounter = 0

class MapManager {

	constructor() {
		if (!instance) {
			this._map = null
			this._currentLocationMoveRequested = false
			this._reduxState = null
			this.initStore()
			// this.store.subscribe(() => this._storeListener())
			this.startLocationWatcher()
			instance = this
		}
		return instance
	}

	async initStore() {
		this.store = await Store()
		this.store.subscribe(() => this.storeListener())
	}

	static getNextID() {
		idCounter++
		return idCounter
	}

	storeListener() {
		this._reduxState = this.store.getState()
		this.handleFlyingToCurrentLocation()
	}

	handleFlyingToCurrentLocation() {
		if (this._currentLocationMoveRequested) {
			this.goToCurrentPosition()
		}
	}

	startLocationWatcher() {
		BackgroundGeolocation.configure({
			desiredAccuracy: 10,
      stationaryRadius: 10,
      distanceFilter: 10,
      locationTimeout: 30,
      debug: false,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: true
		})

		BackgroundGeolocation.on('location', (location) => {
				this.store.dispatch(Actions.updateLocation(location))
				this.store.dispatch(Actions.locationKnown(true))
				this._map.forceUpdate()
		})

		BackgroundGeolocation.on('stationary', () => {})

		BackgroundGeolocation.on('error', (error) => {
			console.log('Geolocation error: ' + error)
			this.store.dispatch(Actions.locationKnown(false))
		})

		BackgroundGeolocation.start(() => {
			console.log('BackgroundGeolocation started')
		})
		// this.watchID = navigator.geolocation.watchPosition(
		// 		(position) => {
		// 			this.store.dispatch(Actions.updateLocation(position.coords))
		// 			this.store.dispatch(Actions.locationKnown(true))
		// 			this._map.forceUpdate()
		// 		},
		// 		(error) => this.store.dispatch(Actions.locationKnown(false)),
		// 		{enableHighAccuracy: false, timeout: 500, maximumAge: 0, distanceFilter: 3}
		// )
	}

	setMapObject(map) {
		this._map = map
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
			longitude: longitude
		}
		this._map.animateToCoordinate(position, 1000)
	}

}

export default MapManager
