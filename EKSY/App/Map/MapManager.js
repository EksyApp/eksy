
let instance = null

class MapManager {
  constructor() {
    if (!instance) {
      this._markers = new Array();
      this._map = null;
      instance = this;
    }
    return instance;
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
    navigator.geolocation.getCurrentPosition(
      (position) => this.flyToPosition(position.coords.latitude, position.coords.longitude),
      (error) => this._handleLocationError(error),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
    )
  }

  flyToPosition(latitude, longitude) {
    let position = {
      latitude: latitude,
      longitude: longitude,
    }
    this._map.animateToCoordinate(position, 1000)
  }

  _handleLocationError(error) {
    console.log(error)
  }

}

export default MapManager
