import React, {Component} from 'react'
import {
	StyleSheet,         // CSS-like styles
	Text,               // Renders text
	TouchableOpacity,   // Pressable container
	View,               // Container component
	ActivityIndicator
} from 'react-native'
import MapView from 'react-native-maps'
import Callout from './Callout'
import styles from './Styles/MapStyles'
import MapManager from './MapManager'
import PostOffice from '../lib/PostOffice'
import * as Actions from '../Actions'
import Marker from '../Map/Marker'
import testData from '../includes/data/Sarjakuvat.json'

export default class Map extends Component {
	
	constructor(props) {
		super(props)
		this._manager = new MapManager();
		this._manager.setMapObject(this);
		this._map = null;
		this.po = new PostOffice();
		
		// testData.features.map((pampyla, index) => {
		// 	let marker = {
		// 		longitude: pampyla.geometry.coordinates[0],
		// 		latitude: pampyla.geometry.coordinates[1],
		// 		text: pampyla.properties.description
		// 	}
		// 	this._manager.addMarker(marker)
		// })
	}
	
	
	animateToCoordinate(position, delay) {
		this._map.animateToCoordinate(position, delay)
	}
	
	handleRegionChange(region) {
		this.props.regionChange(region)
	}
	
	renderMarkers() {
		return this._manager.getMarkers().map((marker, index) =>
			<Marker
					latitude={marker.latitude}
					longitude={marker.longitude}
					text={marker.text}
			/>
		)
	}
	
	renderMapView() {
		return (
				<MapView
						ref={(ref) => this._map = ref}
						style={styles.map}
						initialRegion={this.props.currentRegion}
						onRegionChangeComplete={(region) => this.handleRegionChange(region)}
						showsUserLocation
						showCompass={false}
				>
					{this.renderMarkers()}
				</MapView>
		)
	}
	
	render() {
		return (
				<View style={styles.container}>
					{this.renderMapView()}
				</View>
		)
	}
	
}


// renderPampylat() {
// 	return testData.features.map((pampyla, index) => {
// 		console.log(pampyla.properties.gx_media_links)
// 		return (
// 				// If showGoodOnly is true, but the character is bad - do not show it
// 				<MapView.Marker
// 						coordinate={{
// 							longitude: pampyla.geometry.coordinates[0],
// 							latitude: pampyla.geometry.coordinates[1]
// 						}}
// 						// Callout offset
// 						calloutOffset={{x: -8, y: 28}}
// 						// Greed color for good characters and red for others
// 						pinColor={'#009688'}
// 						key={index}
// 				>
// 					{/* Callout */}
// 					<MapView.Callout tooltip style={styles.callout}>
// 						<Callout
// 								name={pampyla.properties.Name}
// 								description={pampyla.properties.description}
// 								image={pampyla.properties.gx_media_links}
// 						/>
// 					</MapView.Callout>
// 				</MapView.Marker>
// 		)
// 	})
// }
	
	
	
	
	