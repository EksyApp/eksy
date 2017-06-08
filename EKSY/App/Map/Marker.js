import React, {Component} from 'react'
import MapView from 'react-native-maps'
import styles from './Styles/MapStyles'
import Callout from './Callout'
import PropTypes from 'prop-types'

let idCounter = -1;

class Marker extends Component {
  constructor(Props) {
    super(props)
    this._markerComp = null;
  }

  static getNextID() {
    idCounter++;
    return idCounter;
  }

  render() {
    return(
      <MapView.Marker
        coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
        pinColor={this.props.color}
        ref={(ref) => this.markerComp = ref}
        key={this.props.key}
      >
        <MapView.Callout tooltip style={styles.callout}>
          <Callout>
            <Text>{this.props.text}</Text>
          </Callout>
        </MapView.Callout>
      </MapView.Marker>
    )
  }
}

Marker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  color: PropTypes.string,
  key: PropTypes.number.isRequired,
  text: PropTypes.string
}

export default Marker
