import firebase from 'firebase'
import GeoFire from 'geofire'
import * as Actions from '../Actions'
import Store from '../Store'
import {Platform} from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import Filterer from './Filterer'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
const Fetch = RNFetchBlob.fetch
// replace built-in fetch
// copy-paste from original docs AS IS, binaryContentTypes obviously foo
window.fetch = new RNFetchBlob.polyfill.Fetch({
	// enable this option so that the response data conversion handled automatically
	auto: true,
	// when receiving response data, the module will match its Content-Type header
	// with strings in this array. If it contains any one of string in this array,
	// the response body will be considered as binary data and the data will be stored
	// in file system instead of in memory.
	// By default, it only store response data to file system when Content-Type
	// contains string `application/octet`.
	binaryContentTypes: [
		'image/',
		'video/',
		'audio/',
		'foo/',
	]
}).build()

// used to access the firebase database
class FirebaseDao {
	
	static instance = null
	
	constructor() {
		if (FirebaseDao.instance == null) {
			FirebaseDao.instance = this
			this._geofire = null
			this._initGeofire()
			this._geofireQuery = null
			this._initThings()
			this.filterer = new Filterer()
			this.selectedMarkerKey = null
			this.selectedRouteKey = null
		}
		return FirebaseDao.instance
	}
	
	async _initThings() {
		this.store = await Store()
		this.logUserIn()
	}
	
	// creates the region of visible markers
	updateLocation(latitude, longitude) {
		// creates a new query if undefined
		if (!this._geofireQuery) {
			this._geofireQuery = this._geofire.query({
				center: [latitude, longitude],
				radius: this.store ? this.store.getState().map.radius : 0.1
			})
			this._geofireQuery.on('key_entered', (key) => {
				this._handleEnteredMarker(key)
			})
			this._geofireQuery.on('key_exited', (key) => {
				this._handleExitingMarker(key)
			})
		} else {
			// otherwise only updates the query
			this._geofireQuery.updateCriteria({
				center: [latitude, longitude],
				radius: this.store ? this.store.getState().map.radius : 0.1
			})
		}
	}
	
	async _handleEnteredMarker(key) {
		let markerRef = await firebase.database().ref('/markers/markers_info/' + key)
		markerRef.on('value', this._handleUpdatedMarker, this)
	}
	
	async _handleUpdatedMarker(snapshot) {
		let key = snapshot.key
		if (snapshot.val() != null) {
			await this._setMarkerHidden(key)
			let marker = {...snapshot.val(), key}
			if (await this._markerCanBeDisplayed(marker)) {
				this._setMarkerVisible(marker)
			}
		} else {
			this._handleExitingMarker(key)
		}
		
	}
	
	async _markerCanBeDisplayed(marker) {
		let user = await this.getUserObject()
		return marker.status === 1 || (user && (user.admin || marker.creationInfo.user === user.firebaseUser.uid))
	}
	
	async _handleExitingMarker(key) {
		let markerRef = await firebase.database().ref('/markers/markers_info/' + key)
		await markerRef.off('value', this._handleUpdatedMarker, this)
		this._setMarkerHidden(key)
	}
	
	_initGeofire() {
		let reference = firebase.database().ref('/markers/markers_locations')
		this._geofire = new GeoFire(reference)
	}
	
	async addUser() {
		let reference = await firebase.database().ref('/users/' + firebase.auth().currentUser.uid)
		reference.set({
			admin: false
		})
	}
	
	async addMarker(marker) {
		marker = await this._addInfoToMarker(marker)
		
		let markers = await firebase.database().ref('/markers/markers_info')
		let markerRef = await markers.push()
		let key = markerRef.key
		if (marker.images.length > 0) {
			marker.images = await this._uploadImages(key, marker.images)
		}
		await markerRef.set(marker)
		this._setGeofireLocation(key, marker.latitude, marker.longitude)
		this._addMarkerToCurrentUser(key)
		
		
	}
	
	async _addInfoToMarker(marker) {
		let currentUser = await this.getCurrentUser()
		marker = {
			...marker,
			creationInfo: {
				createdAt: new Date().getTime(),
			},
			status: 0,
			
		}
		if (currentUser) {
			marker = {...marker, creationInfo: {...marker.creationInfo, user: currentUser.uid}}
		}
		return marker
	}
	
	async _uploadImages(key, images) {
		// loops through images with map
		return await Promise.all(images.map(async (image, index) => {
			if (!image.uri.startsWith('http')) {
				await this._uploadImage(key, image, index)
			}
			return image
		}))
	}
	
	// uploads image data to firebase based on the image uri
	async _uploadImage(key, image, index, mime = 'application/octet-stream') {
		const uploadUri = Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri
		const imageRef = await firebase.storage().ref('images').child('marker' + `${key}` + '-image-' + `${index}`)
		// 5.7.2017: only works with react-native-fetch-blob.git#issue-287
		const imgData = await fs.readFile(uploadUri, 'base64')
		const blob = await Blob.build(imgData, {type: `${mime};BASE64`})
		await imageRef.put(blob, {contentType: mime})
		await blob.close()
		image.uri = await imageRef.getDownloadURL()
		image.fullPath = await imageRef.fullPath
	}
	
	async _addMarkerToCurrentUser(markerKey) {
		let currentUser = await this.getCurrentUser()
		if (currentUser) {
			let reference = await firebase.database().ref('/users/' + currentUser.uid + '/markers/' + markerKey)
			reference.set(true)
		}
		
	}
	
	async _setGeofireLocation(key, latitude, longitude) {
		this._geofire.set(key, [latitude, longitude]).catch((error) => {
			console.error(error)
		})
	}
	
	// passes the marker to the Filterer class
	async _setMarkerVisible(marker) {
		this.filterer.addMarker(marker)
	}
	
	// passes the marker to the Filterer class
	async _setMarkerHidden(key) {
		this.filterer.removeMarker(key)
	}
	
	async getCurrentUser() {
		let user = await firebase.auth().currentUser
		if (user) {
			return user
		}
		if (this.store.getState().auth.user) {
			return this.store.getState().auth.user.firebaseUser
		}
		return null
		
	}
	
	async updateMarker(marker) {
		if (marker.key) {
			marker.editInfo = {lastEdited: new Date().getTime()}
			marker.status = 0
			if (marker.images.length > 0) {
				marker.images = await this._uploadImages(marker.key, marker.images)
			}
			let markerRef = await firebase.database().ref('/markers/markers_info/' + marker.key)
			await markerRef.set(marker)
			await this._setGeofireLocation(marker.key, marker.latitude, marker.longitude)
		} else {
			this.addMarker(marker)
		}
	}
	
	async removeImage(image) {
		if (image.fullPath) {
			await firebase.storage().ref(image.fullPath).delete()
		}
	}
	
	async removeImages(images) {
		if (images) {
			for (let image of images) {
				this.removeImage(image)
			}
		}
	}
	
	async removeMarker(marker) {
		await this.removeImages(marker.images)
		let markerRef = await firebase.database().ref('/markers/markers_info/' + marker.key)
		await markerRef.remove()
		let userRef = await firebase.database().ref('/users/' + marker.creationInfo.user + '/markers/' + marker.key)
		userRef.remove()
		this._geofire.remove(marker.key)
	}
	
	async userLoggedIn() {
		let firebaseUser = await this.getCurrentUser()
		await this.userLoggedOut()
		this.loggedInUser = firebaseUser.uid
		await firebase.database().ref('/users/' + this.loggedInUser).on('value', this.updateUserObject, this)
	}
	
	async updateUserObject(snapshot) {
		let firebaseUser = await this.getCurrentUser()
		if (firebaseUser) {
			this.store.dispatch(Actions.userLoggedIn({...snapshot.val(), firebaseUser}))
		}
	}
	
	async userLoggedOut() {
		if (this.loggedInUser) {
			await firebase.database().ref('/users/' + this.loggedInUser).off('value')
		}
		this.loggedInUser = null
		this.store.dispatch(Actions.userLoggedOut())
	}
	
	async getUserObject() {
		let firebaseUser = await this.getCurrentUser()
		if (firebaseUser) {
			return this.store.getState().auth.user
		}
		return null
	}
	
	async getPendingMarkers() {
		let snapshotList = await firebase.database().ref('/markers/markers_info/').once('value')
		let pending = []
		snapshotList.forEach((item) => {
			if (item.val().status === 0) {
				pending.push({...item.val(), key: item.key})
			}
		})
		return pending
	}
	
	async setMarkerStatus(key, status) {
		let statusRef = await firebase.database().ref('/markers/markers_info/' + key + '/status')
		statusRef.set(status)
	}
	
	async listenAsSelectedMarker(key) {
		if (this.selectedMarkerKey) {
			let oldRef = await firebase.database().ref('/markers/markers_info/' + this.selectedMarkerKey)
			oldRef.off('value', this.updateSelectedMarker, this)
		}
		if (key) {
			this.selectedMarkerKey = key
			let newRef = await firebase.database().ref('/markers/markers_info/' + key)
			newRef.on('value', this.updateSelectedMarker, this)
		} else {
			this.selectedMarkerKey = null
		}
	}
	
	async updateSelectedMarker(snapshot) {
		let key = snapshot.key
		if (snapshot.val() != null) {
			let marker = {...snapshot.val(), key}
			this.store.dispatch(Actions.setMarkerSelected(marker))
		}
	}
	
	async getUserMarkers() {
		let user = await this.getCurrentUser()
		let uid = user.uid
		console.log(uid)
		let MarkersRef = await firebase.database().ref('/users/' + uid + '/markers').once('value')
		let markerKeys = []
		await MarkersRef.forEach((markerRef) => {
			markerKeys.push(markerRef.key)
		})
		
		return await Promise.all(markerKeys.map(async (key) => {
			let markerRef = await firebase.database().ref('/markers/markers_info/' + key).once('value')
			return {...markerRef.val(), key}
		}))
		
	}
	
	async addNewRoute(route) {
		let user = await this.getCurrentUser()
		route.creator = user.uid
		route.markers = route.markers.map((marker) => marker.key)
		route.createdAt = new Date().getTime()
		route.editedAt = route.createdAt
		let routesRef = await firebase.database().ref('/routes')
		let routeRef = await routesRef.push(route)
		let key = routeRef.key
		await firebase.database().ref('/users/' + user.uid + '/routes/' + key).set(true)
		await firebase.database().ref('markers/markers_info/' + route.markers[0] + '/routes/' + key).set(true)
	}
	
	async getUserRoutes() {
		let user = await this.getUserObject()
		if (user.routes) {
			return Promise.all(Object.keys(user.routes).map(async (routeKey) => {
				let snapshot = await firebase.database().ref('/routes/' + routeKey).once('value')
				let route = {...snapshot.val(), key: routeKey}
				route.markers = await this.getRoutesMarkerObjects(route)
				return route
			}))
		}
		return []
	}
	
	async getRoutesMarkerObjects(route) {
		return await Promise.all(route.markers.map(async (markerKey) => {
			let markerRef = await firebase.database().ref('/markers/markers_info/' + markerKey).once('value')
			return {...markerRef.val(), key: markerKey}
		}))
	}
	
	async getRouteMarkersKeyArray(route) {
		return await Promise.all(route.markers.map(async (marker) => {
			return marker.key
		}))
	}
	
	async updateRoute(route) {
		route.editedAt = new Date().getTime()
		route.markers = await this.getRouteMarkersKeyArray(route)
		let oldRouteSnapshot = await firebase.database().ref('/routes/' + route.key).once('value')
		await firebase.database().ref('/markers/marker_info/' + oldRouteSnapshot.val().markers[0] + '/routes/' + route.key).remove()
		firebase.database().ref('/markers/marker_info/' + route.markers[0] + '/routes/' + route.key).set(true)
		firebase.database().ref('/routes/' + route.key).set(route)
	}
	
	async listenAsSelectedRoute(key) {
		if (this.selectedRouteKey) {
			let oldRef = await firebase.database().ref('/routes/' + this.selectedRouteKey)
			oldRef.off('value', this.updateSelectedRoute, this)
		}
		if (key) {
			this.selectedRouteKey = key
			let newRef = await firebase.database().ref('/routes/' + key)
			newRef.on('value', this.updateSelectedRoute, this)
		} else {
			this.selectedRouteKey = null
		}
	}
	
	async updateSelectedRoute(snapshot) {
		let key = snapshot.key
		if (snapshot.val() != null) {
			let route = {...snapshot.val(), key}
			route.markers = await this.getRoutesMarkerObjects(route)
			this.store.dispatch(Actions.setRouteSelected(route))
		}
	}
	
	async logUserIn() {
		let user = await this.getCurrentUser()
		if (user != null) {
			this.userLoggedIn()
		}
	}
}

export default FirebaseDao
