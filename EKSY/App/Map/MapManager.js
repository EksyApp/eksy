
let instance = null

class MapManager {
  constructor() {
    if (!instance) {
      this._markers = new Array();
      instance = this;
    }

    return instance;
  }

  addMarker(marker) {
    this._markers.push(marker);
  }

  getMarkerComponents() {
    return this._markers;
  }

}

export default MapManager
