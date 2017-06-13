import React, {Component} from 'react'
import MapView from 'react-native-maps'
import styles from './Styles/MapStyles'
import Callout from './Callout'
import PropTypes from 'prop-types'
import {Text} from 'react-native'

class Marker extends Component {
  constructor (props) {
    super(props)
  }
  
  getPropsAsObject() {
    return {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      color: this.props.color,
      text: this.props.text,
    }
  }

  render () {
    return (
      <MapView.Marker
        coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
        pinColor={this.props.color}
				>
        <MapView.Callout
          tooltip
          style={styles.callout}
          calloutOffset={{ x: -8, y: 28 }}
        >
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
  text: PropTypes.string
}

export default Marker
