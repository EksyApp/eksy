import React, {Component} from 'react'
import {PermissionsAndroid} from 'react-native'
import Map from './Map/Map'
import MenuButton from '../Components/MenuButton'
import {View, StyleSheet, Dimensions, Animated, Text, TouchableWithoutFeedback} from 'react-native'
import {Badge} from 'react-native-elements'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import Interactable from 'react-native-interactable'
import MarkerCarousel from '../Components/MarkerCarousel'
import {backgroundColor, detailColor} from '../Theme'
import MarkerView from '../Containers/MarkerView'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export class MapContainer extends Component {

	constructor(props) {
		super(props)

		this._deltaY = new Animated.Value(Screen.height - 100);
	}

	async requestLocationPermission() {
		try {
			const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
			if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
				console.log('no permissions granted') // prompt user?
			}
		} catch (err) {
			console.warn(err)
		}
	}

	async componentWillMount() {
		await this.requestLocationPermission()
	}

	render() {
		return (
				<View style={styles.viewContainer}>
					<Map
							currentRegion={this.props.currentRegion}
							currentLocation={this.props.currentLocation}
							markerList={this.props.markerList}
							setMarkerSelected={this.props.setMarkerSelected}
							setMarkerViewVisible={this.props.setMarkerViewVisible}
							disableGestures={this.props.disableGestures}
							regionChange={this.props.regionChange}/>
					<MenuButton onPress={() => {
						this.props.menuButtonPress()
					}}/>
					<View style={styles.panelContainer}>
						<Animated.View style={[styles.panelContainer, {
							backgroundColor: 'black',
							opacity: this._deltaY.interpolate({
								inputRange: [0, Screen.height - 100],
								outputRange: [1, 0],
								extrapolateRight: 'clamp'
							})
						}]}
						pointerEvents="none"/>
						<Interactable.View
								verticalOnly={true}
								snapPoints={[{y: Screen.height - 220}, {y: Screen.height}]}
								boundaries={{top: 300}}
								initialPosition={{y: Screen.height}}
								animatedValueY={this._deltaY}>
							<Animated.View style={styles.panel}>
								<Animated.View style={styles.panelHeader}>
									<Animated.View style={styles.panelHandle}/>
									{this.props.markerList.length > 0 &&
									<Badge
											value={this.props.markerList.length}
											containerStyle={styles.badgeContainer}
											textStyle={styles.badgeText}
									/>
									}
								</Animated.View>
								<View style={styles.panelVisible}>
									<MarkerCarousel
											markerList={this.props.markerList}
											setMarkerSelected={this.props.setMarkerSelected}
											setMarkerViewVisible={this.props.setMarkerViewVisible}
											disableGestures={this.props.disableGestures}
											pointerEvents="none"/>
								</View>

							</Animated.View>
						</Interactable.View>
					</View>

					<MarkerView />
				</View>
		)
	}
}

// <View style={styles.panel}>
// </View>
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	panelContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
	},
	viewContainer: {
		flex: 1,
	},
	panel: {
		width: Screen.width,
		height: Screen.height,
	},

	panelVisible: {
		paddingTop: 20,
		width:"100%",
		height: Screen.height,
		backgroundColor: backgroundColor,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 0},
		shadowRadius: 5,
		shadowOpacity: 0.4
	},

	panelHeader: {
		alignItems: 'center',
		position: 'relative',
		height: 20
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: detailColor,
		top: 30,
		zIndex: 1,
		position: "absolute"
	},
	badgeContainer: {
		backgroundColor: '#800000',
		position: 'relative',
		top: 22,
		left: 50
	},
	badgeText: {
		color: '#FFFFFF'
	}
})

const mapStateToProps = (state) => {
	return {
		currentRegion: state.map.currentRegion,
		currentLocation: state.map.location,
		markerList: state.markers.markerList,
		markerViewVisible: state.ui.markerView.markerViewVisible
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => {
			dispatch(Actions.drawerOpen())
		},
		regionChange: (region) => {
			dispatch(Actions.updateRegion(region))
		},
		setMarkerSelected: (marker) => {
			dispatch(Actions.setMarkerSelected(marker))
		},
		setMarkerViewVisible: () => {
			dispatch(Actions.setMarkerViewVisible())
		},
		setMarkerViewHidden: () => {
			dispatch(Actions.setMarkerViewHidden())
		},
		disableGestures: (value) => {
			dispatch(Actions.disableGestures(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
