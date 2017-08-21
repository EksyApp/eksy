import React, {Component} from 'react'
import {
	View,
	StyleSheet,
	Dimensions
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MarkerCard from './MarkerCard'
import PropTypes from 'prop-types'
import {MarkersShape} from "../../../Utils/PropTypeShapes";

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}


//Renders marker carousel view inside the bottom sheet
//Carousel contains clickable marker cards (MarkerCard) 
export default class MarkerCarousel extends Component {
	constructor(props) {
		super(props)
		this.itemWidth = (Screen.width*2)/3;
		this.sliderWidth = Screen.width
	}

	handlePress(marker) {
		this.props.setMarkerSelected(marker)
		this.props.setMarkerViewVisible()
		this.props.disableGestures(true)
	}

	renderCards() {
		return this.props.markerList.map((marker, index) => {
			return <MarkerCard
					onPress={(marker) => {
						this.handlePress(marker)
					}}
					setMarkerSelected={this.props.setMarkerSelected}
					setMarkerViewVisible={this.props.setMarkerViewVisible}
					disableGestures={this.props.disableGestures}
					width={this.itemWidth}
					marker={marker}
					key={index}
			/>
		})
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
}
