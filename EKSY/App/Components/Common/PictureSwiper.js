import React, {Component} from 'react'
import Swiper from 'react-native-swipe-a-lot'
import {View, StyleSheet} from "react-native";
import Image from "./Image";
import FastImage from 'react-native-fast-image'

export default class PictureSwiper extends Component {
	
	render() {
		return (
				<Swiper wrapperStyle={[styles.swiper, this.props.style]}>
					{this.props.data.map((image, index) => {
						return (
								<View key={image.uri + index}>
									<Image
											style={styles.image}
											source={{uri: image.uri}}
											resizeMode={FastImage.resizeMode.contain}
									/>
								</View>
						)
					})}
				</Swiper>
		)
	}
	
}

const styles = StyleSheet.create({
	swiper: {
		height: '100%',
		width: '100%'
	},
	
	image: {
		width: '100%',
		height: '100%'
	}
})