import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../../Actions'

class Marker extends Component {
  constructor (props) {
    super(props)

  }

	_handlePress() {
		this.props.setMarkerSelected(this.props.data)
    this.props.setMarkerViewVisible()
    //Actions.markerView();
	}

  render () {
    return (
      <MapView.Marker
        coordinate={{latitude: this.props.data.latitude, longitude: this.props.data.longitude}}
        pinColor={this.props.data.color}
        onPress={() => {this._handlePress()}}
				>
      </MapView.Marker>
    )
  }


}

Marker.propTypes = {
  data: PropTypes.shape({
	  latitude: PropTypes.number.isRequired,
	  longitude: PropTypes.number.isRequired,
	  color: PropTypes.string,
	  text: PropTypes.string,
	  title: PropTypes.string,
	  images: PropTypes.arrayOf(PropTypes.shape({
		  uri: PropTypes.string.isRequired
	  }))
  }).isRequired

}

export default Marker
