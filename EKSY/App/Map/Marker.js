import React, {Component} from 'react'
import MapView from 'react-native-maps'
import styles from './Styles/MapStyles'
import Callout from './Callout'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import * as ReduxActions from '../Actions'
import {Actions} from 'react-native-router-flux'
import Store from '../Store'

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
      title: this.props.title,
      images: this.props.images
    }
  }
	
	_handlePress(event) {
		Store.dispatch(ReduxActions.setSelectedMarker(this.getPropsAsObject()));
		Actions.markerView()
	}

  render () {
    return (
      <MapView.Marker
        coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
        pinColor={this.props.color}
        onPress={(event) => {this._handlePress(event)}}
				>
        {/*<MapView.Callout*/}
          {/*tooltip*/}
          {/*style={styles.callout}*/}
          {/*calloutOffset={{ x: -8, y: 28 }}*/}
        {/*>*/}
          {/*<Callout>*/}
            {/*<Text>{this.props.text}</Text>*/}
          {/*</Callout>*/}
        {/*</MapView.Callout>*/}
      </MapView.Marker>
    )
  }
	
	
}

Marker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  color: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired
  }))
}

export default Marker
