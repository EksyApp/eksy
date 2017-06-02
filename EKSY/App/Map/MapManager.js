
let instance = null

class MapManager {
  constructor() {
    if (!instance) {
      this._markers = new Array();
      this._map = null;
      this._position = null;
      this._positionSet = false;
      this.startLocationWatcher();
      instance = this;
    }
    return instance;
  }

  startLocationWatcher() {
    navigator.geolocation.watchPosition(
      (position) => {
        this._position = position.coords;
        this._positionSet = true;
      },
      (error) => this._handleLocationError(error),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
    )
  }

  getPosition() {
    if (!this.positionKnown()) {
      this.setPositionToKallio();
    }
    return this._position;
  }

  positionKnown() {
    return this._positionSet;
  }

  addMarker(marker) {
    this._markers.push(marker);
  }

  getMarkers() {
    return this._markers;
  }

  setMapObject(map) {
    this._map = map;
  }

  update() {
    this._map.update();
  }

  goToCurrentPosition() {
    if (!this.positionKnown()) {
      setTimeout(() => this.goToCurrentPosition(), 1000);
      return;
    }
    this.flyToPosition(this.getPosition().latitude, this.getPosition().longitude);
  }

  flyToPosition(latitude, longitude) {
    let position = {
      latitude: latitude,
      longitude: longitude,
    }
    this._map.animateToCoordinate(position, 1000)

  }

  _handleLocationError(error) {
    if (!this._position) {
      this.setPositionToKallio();
    }
    console.warn(error)
  }

  setPositionToKallio() {
    this._positionSet = false;
    this._position = {
      latitude: 60.184356,
      longitude: 24.949326
    }
  }

}

export default MapManager
