import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
import * as ReduxActions from '../../Actions'
import {Actions} from 'react-native-router-flux'
import configureStore from '../../Store'

class Marker extends Component {
  constructor (props) {
    super(props)
	  this._initStore()
  }

	async _initStore() {
		this.store = await configureStore()
	}


	_handlePress(event) {
		this.store.dispatch(ReduxActions.setMarkerSelected(this.props.data));
		Actions.markerView()
	}

  render () {
    return (
      <MapView.Marker
        coordinate={{latitude: this.props.data.latitude, longitude: this.props.data.longitude}}
        pinColor={this.props.data.color}
        onPress={(event) => {this._handlePress(event)}}
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
