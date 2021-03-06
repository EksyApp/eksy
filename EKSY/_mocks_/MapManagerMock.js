import MapManager from '../App/Utils/MapManager';

export default MapManagerMock = () => {
  MapManager.prototype.startLocationWatcher = jest.fn()
  MapManager.prototype.storeListener = jest.fn()
  MapManager.prototype.goToCurrentPosition = jest.fn()
  MapManager.prototype.flyToPosition = jest.fn()
}
