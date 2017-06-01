import React, {Component} from 'react'
import MapView from 'react-native-maps'
import styles from './Styles/MapStyles'
import Callout from './Callout'

let idCounter = -1;

class Marker {
  constructor(latitude, longitude, id) {
    this._latitude = latitude;
    this._longitude = longitude;
    this._pinColor = null;
    this._text = "";
    this._markerComp = null;
    this.key = id;
  }

  static getNextID() {
    idCounter++;
    return idCounter;
  }

  setIdFromCounter() {
    this.key = Marker.getNextID();
  }

  getLatitude() {
    return this._latitude;
  }

  getLongitude() {
    return this._longitude;
  }

  setColor(color) {
    this._pinColor = color;
  }

  getColor() {
    return this._pinColor;
  }

  setText(text) {
    this._text = text;
  }

  getText() {
    return this._text;
  }

  getComponent() {
    return(
      <MapView.Marker
        coordinate={{latitude: this._latitude, longitude: this._longitude}}
        pinColor={this._pinColor}
        ref={(ref) => this.markerComp = ref}
        key={this.key}
      >
        <MapView.Callout tooltip style={styles.callout}>
          <Callout
            description={this._text}
          />
        </MapView.Callout>
      </MapView.Marker>
    )
  }


}

export default Marker
