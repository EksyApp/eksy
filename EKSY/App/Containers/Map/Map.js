import React, {Component} from 'react'
import {
	StyleSheet,         // CSS-like styles
	Text,               // Renders text
	TouchableOpacity,   // Pressable container
	View,               // Container component
	ActivityIndicator,
	Animated
} from 'react-native'
import MapView from 'react-native-maps'
import styles from './Styles/MapStyles'
import MapManager from './MapManager'
import * as Actions from '../../Actions'
import Marker from './Marker'
import { circleStrokeColor, circleFillColor } from '../../Theme'
import Store from '../../Store'
import isEqual from 'lodash/isEqual'

class Map extends Component {

	constructor(props) {
		super(props)
		this._manager = new MapManager();
		this._manager.setMapObject(this);
		this._map = null;
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

	async componentWillReceiveProps(nextProps) {
		if (!isEqual(nextProps, this.props)) {
			// this.store = await Store()
			// navigator.geolocation.getCurrentPosition(
			// 	(position) => {
			// 		this.store.dispatch(Actions.updateLocation(position.coords))
			// 		this.store.dispatch(Actions.locationKnown(true))
			// 		this.animateToCoordinate(position.coords, 100)
			// 	},
			// 	(error) => this.store.dispatch(Actions.locationKnown(false)),
			// 	{enableHighAccuracy: false, timeout: 500, maximumAge: 1000000, distanceFilter: 1}
			// )
		}
	}

	renderMarkers() {
		return this.props.markerList.map((marker, index) =>
			<Marker
				data={marker}
				setMarkerSelected={this.props.setMarkerSelected}
				setMarkerViewVisible={this.props.setMarkerViewVisible}
				key={marker.key}
			/>)
	}

	renderUserCircle() {
		if (this.props.currentLocation.isKnown) {
			return (
					<MapView.Marker key='user' coordinate={this.props.currentLocation} >
						<Animated.View style={[styles.userMarkerWrap]}>
							<Animated.View style={[styles.userRing]} />
							<View style={styles.userMarker} />
						</Animated.View>
					</MapView.Marker>
			)
			// <MapView.Circle
			// 					center={this.props.currentLocation}
			// 					radius={100}
			// 					strokeWidth={2}
			// 					strokeColor={circleStrokeColor}
			// 					fillColor={circleFillColor}
			// 					key={(this.props.currentLocation.longitude + this.props.currentLocation.latitude)}
			// 				/>
			// <MapView.Marker
			// 		key='user'
			// 		coordinate={this.props.currentLocation}
			// 		style={{flex: 1}}
			// >
		}

		return null
	}

	renderMapView() {
		return (
				<MapView
						ref={(ref) => this._map = ref}
						style={styles.map}
						initialRegion={this.props.currentRegion}
						onRegionChange={(region) => this.handleRegionChange(region)}
						/*loadingEnabled*/
						/*showsUserLocation*/
						showsMyLocationButton={true}
						showsBuildings={true}
						showCompass={false}
				>
					{this.renderUserCircle()}
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



export default Map

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
