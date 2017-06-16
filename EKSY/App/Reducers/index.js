import {combineReducers} from 'redux'
import auth from './AuthReducer'
// import locations from './LocationsReducer'
import ui from './UiReducer'
import map from './MapReducer'

export default combineReducers(
  {auth, ui, map}
)

/*
initialStateForTesting = {
	auth: {
		response: "",
		user: null
	},
	
	ui: {
		drawer: {
			drawerOpen: false
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
 */