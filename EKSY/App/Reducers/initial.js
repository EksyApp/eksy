export default {
	auth: {
		response: "",
		user: null
	},

	ui: {
		drawer: {
			drawerOpen: false,
			disableGestures: false
		},
		markerView: {
			markerViewVisible: false
		}
	},

	map: {
		location: {
			latitude: 60.184356,
			longitude: 24.949326,
			isKnown: false
		},

		currentRegion: {
			latitude: 60.184356,
			longitude: 24.949326,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1,
		},

		selectedMarker: {
			marker: {
				latitude: null,
				longitude: null,
				color: "",
				text: "",
				title: "",
				images: []
			}
		}
	}
}
