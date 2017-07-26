import React, {Component} from 'react'
import {
	StyleSheet,         // CSS-like styles
	Text,               // Renders text
	TouchableOpacity,   // Pressable container
	View,               // Container component
	ActivityIndicator,
	Animated,
	Dimensions
} from 'react-native'
import MapView from 'react-native-maps'
import MapManager from './MapManager'
import Marker from './Marker'
import isEqual from 'lodash/isEqual'
import {connect} from 'react-redux'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export default class Map extends Component {
	
	constructor(props) {
		super(props)
		this._manager = new MapManager();
		this._manager.setMapObject(this);
		this._map = null;
		
		this.state = {
			zoomLevel: (360 * ((Screen.width/256) / this.props.currentRegion.longitudeDelta)) + 1
		}
	}
	
	animateToCoordinate(position, delay) {
		if (this._map) {
			this._map.animateToCoordinate(position, delay)
		}
	}
	
	handleRegionChange(region) {
		this.props.regionChange(region)
		this.setState({...this.state, zoomLevel: (360 * ((Screen.width/256) / region.longitudeDelta)) + 1})
		console.log(this.state.zoomLevel)
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
						disableGestures={this.props.disableGestures}
						key={marker.key}
				/>)
	}
	
	renderUserCircle() {
		if (this.props.currentLocation.isKnown) {
			return (
					<Animated.View>
						<MapView.Circle center={this.props.currentLocation}
						                radius={100}
						                strokeWidth={0.5}
						                strokeColor="rgba(66, 180, 230, 1)"
						                fillColor="rgba(66, 180, 230, 0.2)"
						/>
						<MapView.Circle center={this.props.currentLocation}
						                radius={300000 / this.state.zoomLevel}
						                strokeWidth={0.5}
						                strokeColor="rgba(66, 180, 230, 1)"
						                fillColor="rgba(66, 180, 230, 1)"
						/>
					</Animated.View>
			)
			// <MapView.Marker key='user' coordinate={this.props.currentLocation} style={{flex: 1}}>
			// 	<Animated.View style={[styles.userMarkerWrap]}>
			// 		<Animated.View style={[styles.userRing]} />
			// 		<View style={styles.userMarker} />
			// 	</Animated.View>
			// </MapView.Marker>
			
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
				<MapView.Animated
						ref={(ref) => this._map = ref}
						style={styles.map}
						initialRegion={this.props.currentRegion}
						onRegionChange={(region) => this.handleRegionChange(region)}
						/*loadingEnabled*/
						/*showsUserLocation*/
						followUserLocation
						showsMyLocationButton={true}
						showsBuildings={true}
						showCompass={false}
				>
					{this.renderUserCircle()}
					{this.renderMarkers()}
				</MapView.Animated>
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


const styles = StyleSheet.create({
	container: {
		flex: 1,                            // Take up the whole screen
		justifyContent: 'flex-end',         // Arrange button at the bottom
		alignItems: 'center',               // Center button horizontally
	},
	map: {
		position:'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	buttonContainer: {
		marginVertical: 20,
	},
	button: {
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.7)',
		borderRadius: 20,
		padding: 12,
		width: 160,
	},
	callout: {
		width: 140,
	},
	circle: {
		borderRadius: 12,
		backgroundColor: "rgba(130,4,150, 0.3)",
		position: "absolute",
		borderWidth: 1,
		borderColor: "rgba(130,4,150, 0.5)"
	}
});