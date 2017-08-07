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
const Fetch = RNFetchBlob.polyfill.Fetch
// replace built-in fetch
// copy-paste from original docs AS IS, binaryContentTypes obviously foo
window.fetch = new Fetch({
    // enable this option so that the response data conversion handled automatically
    auto : true,
    // when receiving response data, the module will match its Content-Type header
    // with strings in this array. If it contains any one of string in this array,
    // the response body will be considered as binary data and the data will be stored
    // in file system instead of in memory.
    // By default, it only store response data to file system when Content-Type
    // contains string `application/octet`.
    binaryContentTypes : [
        'image/',
        'video/',
        'audio/',
        'foo/',
    ]
}).build()

// used to access the firebase database
class FirebaseDao {

	static instance = null;

	constructor() {
		if (FirebaseDao.instance == null) {
			FirebaseDao.instance = this;
			this._geofire = null
			this._initGeofire();
			this._geofireQuery = null;
			this._initStore()
			this.filterer = new Filterer();
		}
		return FirebaseDao.instance;
	}

	async _initStore() {
		this.store = await Store()
	}

	// creates the region of visible markers
	updateLocation(latitude, longitude) {
		// creates a new query if undefined
		if (!this._geofireQuery) {
			this._geofireQuery = this._geofire.query({
				center: [latitude, longitude],
				radius: 0.1
			})
			this._geofireQuery.on('key_entered', (key) => {
				this._setMarkerVisible(key)
			})
			this._geofireQuery.on('key_exited', (key) => {
				this._setMarkerHidden(key)
			})
		} else {
			// otherwise only updates the query
			this._geofireQuery.updateCriteria({center: [latitude, longitude]})
		}
	}

	_initGeofire() {
		let reference = firebase.database().ref("/markers/markers_locations")
		this._geofire = new GeoFire(reference)
	}

	async addUser() {
		let reference = await firebase.database().ref("/users/" + firebase.auth().currentUser.uid)
		reference.set({

		})
	}

	async addMarker(marker) {
		marker = await this._addInfoToMarker(marker)

		let markers = await firebase.database().ref("/markers/markers_info")
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
				createdAt: new Date().toUTCString(),
			},
			verified: false
		}
		if (currentUser) {
			marker = {...marker, creationInfo: {...marker.creationInfo, user: currentUser.uid}}
		}
		return marker
	}

	async _uploadImages(key, images) {
		// loops through images with map
		return await Promise.all(images.map(async (image, index) => {
			if(!image.uri.startsWith('http')) {
				await this._uploadImage(key, image, index)
			}
			return image
		}))
	}

	// uploads image data to firebase based on the image uri
	async _uploadImage(key, image, index, mime = 'application/octet-stream') {
		const uploadUri = Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri
		const imageRef = await firebase.storage().ref('images').child("marker" + `${key}` + "-image-" + `${index}`)
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
			let reference = await firebase.database().ref("/users/" + currentUser.uid + '/markers')
			reference.push(markerKey)
		}

	}

	async _setGeofireLocation(key, latitude, longitude) {
		this._geofire.set(key, [latitude, longitude]).catch((error) => {
			console.error(error)
		})
	}

	// passes the marker to the Filterer class
	async _setMarkerVisible(key) {
		let snapshot = await firebase.database().ref("/markers/markers_info/" + key).once('value')
		this.filterer.addMarker({...snapshot.val(), key})
	}

	// passes the marker to the Filterer class
	async _setMarkerHidden(key) {
		this.filterer.removeMarker(key)
	}

	async getCurrentUser() {
		return await firebase.auth().currentUser
	}

	async updateMarker(marker) {
		if(marker.key) {
			marker.editInfo = {lastEdited: new Date().toUTCString()}
			if (marker.images.length > 0) {
				marker.images = await this._uploadImages(marker.key, marker.images)
			}
			let markerRef = await firebase.database().ref("/markers/markers_info/" + marker.key)
			await markerRef.set(marker)
			await this._setGeofireLocation(marker.key, marker.latitude, marker.longitude)
		} else {
			this.addMarker(marker)
		}
	}

	async removeImage(image) {
		if(image.fullPath) {
			await firebase.storage().ref(image.fullPath).delete()
		}
	}

	async removeImages(images) {
		if(images) {
			for (let image of images) {
				this.removeImage(image)
			}
		}
	}

	async removeMarker(marker) {
		await this.removeImages(marker.images)
		let markerRef = await firebase.database().ref("/markers/markers_info/" + marker.key)
		await markerRef.remove()
		this._geofire.remove(marker.key)
	}
}

export default FirebaseDao
