import React from 'react'
import * as Actions from '../Actions/index'
import Store from '../Store/index'
//import BackgroundGeolocation from 'react-native-mauron85-background-geolocation'

let instance = null

// used to give commands to the Google Map
class MapManager {

	constructor() {
		if (!instance) {
			this._map = null
			this._reduxState = null
			this.initStore()
			this.startLocationWatcher()
			instance = this
		}
		return instance
	}

	async initStore() {
		this.store = await Store()
		this.store.subscribe(() => this.storeListener())
	}

	storeListener() {
		this._reduxState = this.store.getState()
	}

	startLocationWatcher() {
		/*
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
				this.store.dispatch(ReduxActions.updateLocation(location))
				this.store.dispatch(ReduxActions.locationKnown(true))
				this._map.forceUpdate()
		})

		BackgroundGeolocation.on('stationary', () => {})

		BackgroundGeolocation.on('error', (error) => {
			console.log('Geolocation error: ' + error)
			this.store.dispatch(ReduxActions.locationKnown(false))
		})

		BackgroundGeolocation.start(() => {
			console.log('BackgroundGeolocation started')
		})
		*/
		this.watchID = navigator.geolocation.watchPosition(
				(position) => {
					this.store.dispatch(Actions.updateLocation(position.coords))
					this.store.dispatch(Actions.locationKnown(true))
					this._map.forceUpdate()
				},
				(error) => this.store.dispatch(Actions.locationKnown(false)),
				{enableHighAccuracy: false, timeout: 500, maximumAge: 0, distanceFilter: 3}
		)
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