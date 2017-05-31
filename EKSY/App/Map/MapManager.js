
let instance = null

class MapManager {
  constructor() {
    if (!instance) {
      this._markers = new Array();
      this._updater = null;
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

  setUpdateFunction(func) {
    this._updater = func;
  }

  update() {
    this._updater();
  }

}

export default MapManager
