import React, {Component} from 'react'
import {
	View,
	StyleSheet,
	Dimensions
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MarkerCard from './MarkerCard'
import PropTypes from 'prop-types'
import {LocationShape, MarkerShape, MarkersShape} from '../../../Utils/PropTypeShapes'
import TeaserCard from './RouteInfo/TeaserCard'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}


//Renders marker carousel view inside the bottom sheet
//Carousel contains clickable marker cards (MarkerCard) 
export default class MarkerCarousel extends Component {
	constructor(props) {
		super(props)
		this.itemWidth = (Screen.width * 2) / 3
		this.sliderWidth = Screen.width
	}
	
	
	renderCards() {
		return this.props.markerList.map((marker, index) => {
			return <MarkerCard
					onPress={this.props.onMarkerClick}
					width={this.itemWidth}
					marker={marker}
					key={index}
			/>
		})
	}
	
	renderTeaser() {
		if (this.props.showTeaser) {
			return (
					<TeaserCard
							currentLocation={this.props.currentLocation}
							nextMarker={this.props.nextMarker}
							width={this.itemWidth}
					/>
			)
		}
	}
	
	render() {
		return (
				<View style={styles.container}>
					<Carousel
							itemWidth={this.itemWidth}
							sliderWidth={this.sliderWidth}
							enableSnap={true}
					>
						{this.renderCards()}
						{this.renderTeaser()}
					</Carousel>
				</View>
		)
	}
	
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

MarkerCarousel.propTypes = {
	setMarkerSelected: PropTypes.func,
	setMarkerViewVisible: PropTypes.func,
	disableGestures: PropTypes.func,
	markerList: MarkersShape,
	showTeaser: PropTypes.bool,
	currentLocation: LocationShape,
	nextMarker: MarkerShape
}
