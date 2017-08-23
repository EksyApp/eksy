import React, {Component} from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'
import MapView from 'react-native-maps'
import MapManager from '../../../Utils/MapManager'
import Marker from './Marker'
import PropTypes from 'prop-types'
import {LocationShape, MarkerShape, MarkersShape, RegionShape, RouteShape} from '../../../Utils/PropTypeShapes'
import GeoFire from 'geofire'
import RouteMapContents from './RouteMapContents'
import DefaultMapContents from './DefaultMapContents'


//Renders map view inside the main view (MainViewComponent)
//Map component holds clickable markers (Marker)
export default class MapComponent extends Component {
	
	constructor(props) {
		super(props)
		this._manager = new MapManager()
		this._manager.setMapObject(this)
		this._map = null
		
	}
	
	animateToCoordinate(position, delay) {
		if (this._map) {
			this._map._component.animateToCoordinate(position, delay)
		}
	}
	
	handleRegionChange(region) {
		this.props.regionChange(region)
	}
	
	renderContents() {
		if (this.props.routeIsActive) {
			return (
					<RouteMapContents
							currentLocation={this.props.currentLocation}
							currentRegion={this.props.currentRegion}
							radius={this.props.radius}
							route={this.props.route}
							nextMarker={this.props.nextMarker}
							onMarkerClick={this.props.onMarkerClick}
					/>
			)
		} else {
			return (
					<DefaultMapContents
							currentRegion={this.props.currentRegion}
							currentLocation={this.props.currentLocation}
							markerList={this.props.markerList}
							radius={this.props.radius}
							onMarkerClick={this.props.onMarkerClick}
					/>
			)
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
					{this.renderContents()}
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
	onMarkerClick: PropTypes.func,
	routeIsActive: PropTypes.bool,
	route: RouteShape,
	nextMarker: MarkerShape
}

