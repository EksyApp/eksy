import Store from '../Store'
import * as ReduxActions from '../Actions'


// handles filtering visible markers based on filters set in the settings
export default class Filterer {

	// singleton
	static instance = null

	constructor() {
		if(Filterer.instance === null) {
			this.filteredMarkers = []
			this.filtersLength = 0
			this._initStore()
			Filterer.instance = this;
		}

		return Filterer.instance;
	}

	async _initStore() {
		this.store = await Store()
		this.state = this.store.getState()
		this.filtersLength = this.state.filters.length
		this.store.subscribe(() => {this._storeListener()})
	}

	_storeListener() {
		this.state = this.store.getState()
		// this.filtersLength is used to check if filter list has changed and how, as only actions are adding or removing
		if(this.state.filters && this.state.filters.length !== this.filtersLength) {
			if (this.filtersLength < this.state.filters.length) {
				this.filtersLength = this.state.filters.length;
				this._handleAddedFilter();
			} else {
				this.filtersLength = this.state.filters.length;
				this._handleRemovedFilter();
			}
		}
	}

	// checks if marker should be filtered out,
	// marker is filtered out if it has a filter that is not active.
	_markerIsFilteredOut(marker) {
		if(marker.filters) {
			for (let filter of marker.filters) {
				if(this.state.filters && !this.state.filters.includes(filter)) {
					return true;
				}
			}
		}
		return false;
	}

	// this is called when a active filter gets deactivated.
	// It loops through the visible markers and removes any that no longer should be visible.
	// it saves hidden markkers to this.filteredMarkers list
	_handleRemovedFilter() {
		for (let i = 0; i < this.state.markers.markerList.length; i++) {
			if(this._markerIsFilteredOut(this.state.markers.markerList[i])) {
				this.filteredMarkers.push(this.state.markers.markerList[i])
				this.store.dispatch(ReduxActions.setMarkerHidden(this.state.markers.markerList[i].key))
				i--;
			}
		}
	}


	_handleAddedFilter() {
		for (let i = 0; i < this.filteredMarkers.length; i++) {
			if(!this._markerIsFilteredOut(this.filteredMarkers[i])) {
				this.store.dispatch(ReduxActions.setMarkerVisible(this.filteredMarkers[i]));
				this.filteredMarkers.splice(i, 1);
				i--;
			}
		}
	}

	// this is called by the dao when new marker is in the range.
	// It checks if it should be filtered or not.
	addMarker(marker) {
		if(this._markerIsFilteredOut(marker)) {
			this.filteredMarkers.push(marker)
		} else {
			this.store.dispatch(ReduxActions.setMarkerVisible(marker));
		}
	}

	removeMarker(marker) {
		if(this._markerIsFilteredOut(marker)) {
			this.filteredMarkers = this.filteredMarkers.filter((filtered) => filtered.key !== marker.key)
		} else {
			this.store.dispatch(ReduxActions.setMarkerHidden(marker.key))
		}
	}

}
