import React, {Component} from 'react'
import MapView from 'react-native-maps'
import styles from './Styles/MapStyles'
import Callout from './Callout'
import PropTypes from 'prop-types'
import {Text} from 'react-native'

let idCounter = -1;

class Marker extends Component {
	constructor(props) {
		super(props)
		this.key = Marker.getNextID()
	}
	
	static getNextID() {
		idCounter++
		return idCounter
	}
	
	render() {
		return (
				<MapView.Marker
						coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
						pinColor={this.props.color}
						key={this._key}
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
	text: PropTypes.string
}

export default Marker
