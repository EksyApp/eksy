import React, {Component} from 'react'
import {
	View,
	StyleSheet,
	Dimensions
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MarkerCard from './MarkerCard'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export default class MarkerCarousel extends Component {
	constructor(props) {
		super(props)
		this.itemWidth = (Screen.width*2)/3;
		this.sliderWidth = Screen.width
	}
	
	renderCards() {
		return this.props.markerList.map((marker, index) => {
			return <MarkerCard
					setMarkerSelected={this.props.setMarkerSelected}
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
