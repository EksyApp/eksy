import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Animated,
	Dimensions
} from 'react-native'
import MapView from 'react-native-maps'
import MapManager from '../../../Utils/MapManager'
import Marker from './Marker'
import PropTypes from 'prop-types'
import {LocationShape, MarkerShape, MarkersShape, RegionShape, RouteShape} from '../../../Utils/PropTypeShapes'
import GeoFire from 'geofire'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

//Renders map view inside the main view (MainViewComponent)
//Map component holds clickable markers (Marker)
export default class MapComponent extends Component {
	
	constructor(props) {
		super(props)
		this._manager = new MapManager()
		this._manager.setMapObject(this)
		this._map = null
		
		this.state = {
			zoomLevel: (360 * ((Screen.width / 256) / this.props.currentRegion.longitudeDelta)) + 1
		}
	}
	
	animateToCoordinate(position, delay) {
		if (this._map) {
			this._map._component.animateToCoordinate(position, delay)
		}
	}
	
	handleRegionChange(region) {
		this.props.regionChange(region)
		this.setState({zoomLevel: (360 * ((Screen.width / 256) / region.longitudeDelta)) + 1})
	}
	
	renderMarkers() {
		return this.props.markerList.map((marker, index) =>
				<Marker
						data={marker}
						setMarkerSelected={this.props.setMarkerSelected}
						setMarkerViewVisible={this.props.setMarkerViewVisible}
						disableGestures={this.props.disableGestures}
						key={marker.key}
				/>
		)
		
	}
	
	
	renderUserCircle() {
		if (this.props.currentLocation.isKnown) {
			return (
					<Animated.View>
						<MapView.Circle center={this.props.currentLocation}
						                radius={this.props.radius * 1000}
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
		}
		
		return null
	}
	
	renderRouteLine() {
		if (this.props.routeIsActive) {
			let distance = GeoFire.distance([this.props.currentLocation.latitude, this.props.currentLocation.longitude], [this.props.nextMarker.latitude, this.props.nextMarker.longitude])
			console.log(distance)
			console.log(this.props.radius)
			if (distance >= this.props.radius) {
				let latitude = this.props.currentLocation.latitude + (this.props.radius / distance) * (this.props.nextMarker.latitude - this.props.currentLocation.latitude)
				let longitude = this.props.currentLocation.longitude + (this.props.radius / distance) * (this.props.nextMarker.longitude - this.props.currentLocation.longitude)
				return (<MapView.Polyline coordinates={[this.props.currentLocation, {latitude, longitude}]}/>)
			} else {
				return (<MapView.Polyline coordinates={[this.props.currentLocation, this.props.nextMarker]}/>)
			}
		}
	}
	
	renderMapView() {
		return (
				<MapView.Animated
						ref={(ref) => this._map = ref}
						style={styles.map}
						initialRegion={this.props.currentRegion}
						onRegionChange={(region) => this.handleRegionChange(region)}
						followUserLocation
						showsMyLocationButton={true}
						showsBuildings={true}
						showCompass={false}
				>
					{this.renderRouteLine()}
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
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		position: 'absolute',
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
		backgroundColor: 'rgba(130,4,150, 0.3)',
		position: 'absolute',
		borderWidth: 1,
		borderColor: 'rgba(130,4,150, 0.5)'
	}
})

MapComponent.propTypes = {
	currentRegion: RegionShape,
	currentLocation: LocationShape,
	radius: PropTypes.number,
	markerList: MarkersShape,
	setMarkerSelected: PropTypes.func,
	setMarkerViewVisible: PropTypes.func,
	disableGestures: PropTypes.func,
	routeIsActive: PropTypes.bool,
	route: RouteShape,
	nextMarker: MarkerShape
}

