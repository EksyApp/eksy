import firebase from 'firebase'
import GeoFire from 'geofire'


class FirebaseDao {
	
	static instance = null;
	
	constructor() {
		if(FirebaseDao.instance == null) {
			FirebaseDao.instance = this;
			this._geofire = null
			this._initGeofire();
		}
		return FirebaseDao.instance;
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
		let markers = await firebase.database().ref("/markers/markers_info")
		let markerRef = await markers.push()
		let key = markerRef.key
		await markerRef.set(marker)
		this._addGeofireLocation(key, marker.latitude, marker.longitude)
	}
	
	async _addGeofireLocation(key, latitude, longitude) {
		this._geofire.set(key, [latitude, longitude]).catch((error) => {
			console.error(error)
		})
	}
	
	
	
}

export default FirebaseDao