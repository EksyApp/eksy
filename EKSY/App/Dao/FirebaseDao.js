import firebase from 'firebase'
import GeoFire from 'geofire'
import MapManager from '../Map/MapManager'

class FirebaseDao {
	
	static instance = null;
	
	constructor() {
		if(FirebaseDao.instance == null) {
			FirebaseDao.instance = this;
			this._geofire = null
			this._initGeofire();
			this._geofireQuery = null;
			this._mapManager = new MapManager()
		}
		return FirebaseDao.instance;
	}
	
	updateLocation(latitude, longitude) {
		// console.warn("location updated to lat: " + latitude + ", long: " + longitude)
		if(!this._geofireQuery) {
			this._geofireQuery = this._geofire.query({
				center: [latitude, longitude],
				radius: 0.1
			})
			this._geofireQuery.on('key_entered', (key) => {
				this._addMarkerToMapManager(key)
			})
			this._geofireQuery.on('key_exited', (key) => {
				this._removeMarkerFromMapManager(key)
			})
		} else {
			this._geofireQuery.updateCriteria({center: [latitude, longitude]})
		}
	}
	
	_initGeofire() {
		let reference = firebase.database().ref("/markers/markers_locations")
		this._geofire = new GeoFire(reference)
	}
	
	async addUser() {
		let reference =  await firebase.database().ref("/users/" + firebase.auth().currentUser.uid)
		reference.set({
			email: firebase.auth().currentUser.email
		})
	}
	
	async addMarker(marker) {
		marker = await this._addInfoToMarker(marker)
		let markers = await firebase.database().ref("/markers/markers_info")
		let markerRef = await markers.push()
		let key = markerRef.key
		await markerRef.set(marker)
		this._addGeofireLocation(key, marker.latitude, marker.longitude)
		this._addMarkerToCurrentUser(key)
	}
	
	async _addInfoToMarker(marker) {
		let currentUser = await this.getCurrentUser()
		marker = {
			...marker,
			creationInfo: {
				createdAt: new Date().toUTCString(),
			},
			verified: false
		}
		if (currentUser) {
			marker = {...marker, creationInfo: {...marker.creationInfo, user: currentUser.uid}}
		}
		return marker
	}
	
	async _addMarkerToCurrentUser(markerKey) {
		let currentUser = await this.getCurrentUser()
		if(currentUser) {
			let reference =  await firebase.database().ref("/users/" + currentUser.uid + '/markers')
			reference.push(markerKey)
		}
		
	}
	
	async _addGeofireLocation(key, latitude, longitude) {
		this._geofire.set(key, [latitude, longitude]).catch((error) => {
			console.error(error)
		})
	}
	
	_addMarkerToMapManager(key) {
		let markerRef = firebase.database().ref("/markers/markers_info/" + key).once('value').then((snapshot) => {
			console.warn("marker with title " + snapshot.val().title + " added to map")
			this._mapManager.addMarker(key, snapshot.val());
		})
	}
	
	_removeMarkerFromMapManager(key) {
		console.warn("marker removed from map")
		this._mapManager.removeMarker(key)
	}
	
	async getCurrentUser() {
		return await firebase.auth().currentUser
	}
}

export default FirebaseDao