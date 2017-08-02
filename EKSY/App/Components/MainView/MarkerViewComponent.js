import React, {Component} from 'react'
import {Image, Modal, ScrollView, TouchableWithoutFeedback, View, Dimensions, StyleSheet } from 'react-native'
import Label from "../Common/Label";
import ViewMoreText from "../Common/ViewMoreText";
import * as Theme from "../../Theme/Colors";
import Divider from "../Common/Divider";
import FastImage from "react-native-fast-image";
import Swiper from "react-native-swipe-a-lot";


const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

class MarkerViewComponent extends Component {
	
	
	constructor(props) {
		super(props)
		this.itemWidth = (0.85 * Screen.width * 2) / 3
		this.sliderWidth = 0.85 * Screen.width
		this.state = {
			isCollapsed: true
		}
	}
	
	_setCollapsed = () => {
		if (!this.state.isCollapsed) {
			this.setState({isCollapsed: true})
		}
	}
	
	_setExpanded = () => {
		if (this.state.isCollapsed) {
			this.setState({isCollapsed: false})
		}
	}
	
	_renderImage(image) {
		if (image.uri.startsWith('http')) {
			return (
					<FastImage
							resizeMode={FastImage.resizeMode.contain}
							source={{uri: image.uri}}
							style={{width: '100%', height: '100%'}}
					/>
			)
		} else {
			return (
					<Image
							resizeMode={FastImage.resizeMode.contain}
							source={{uri: image.uri}}
					/>
			)
		}
	}
	
	_renderImages() {
		if (this.props.marker.images && this.props.marker.images.length > 0) {
			return (
					<View
							style={[!this.state.isCollapsed && styles.renderImagesCollapsed, this.state.isCollapsed && styles.renderImagesExpanded]}>
						<View style={styles.labelWrapper}>
							<Divider />
						</View>
						
						<Swiper
								wrapperStyle={styles.swiper}
						>
							{this.props.marker.images.map((image, index) => {
								return (
										<View key={image.uri + index}>
											{ this._renderImage(image) }
										</View>)
							})
							}
						</Swiper>
					</View>
			)
		} else {
			return null
		}
	}
	
	render() {
		return (
				<TouchableWithoutFeedback onPress={this.props.setMarkerViewHidden}>
					<Modal
							visible={this.props.markerViewVisible}
							animationType={'fade'}
							transparent
							onRequestClose={this.props.setMarkerViewHidden}
					>
						<View style={styles.content}>
							<View
									style={[this.state.isCollapsed && styles.titleAndTextWrapperCollapsed, !this.state.isCollapsed && styles.titleAndTextWrapperExpanded]}>
								<Label style={styles.title}>{this.props.marker.title}</Label>
								<ScrollView>
									<ViewMoreText
											numberOfLines={1}
											afterCollapse={this._setCollapsed}
											afterExpand={this._setExpanded}
									>
										{this.props.marker.text}
									</ViewMoreText>
								</ScrollView>
							</View>
							{this._renderImages()}
						</View>
					</Modal>
				</TouchableWithoutFeedback>
		)
	}
}


const styles = StyleSheet.create({
	
	content: {
		backgroundColor: Theme.backgroundColor,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		margin: 20
	},
	
	renderImagesCollapsed: {
		flex: 1,
		justifyContent: 'center'
	},
	renderImagesExpanded: {
		flex: 5,
		justifyContent: 'center',
		margin: 5
	},
	
	titleAndTextWrapperCollapsed: {
		flex: 1,
		alignItems: 'center',
		margin: 10
	},
	
	titleAndTextWrapperExpanded: {
		// flex: 0,
		alignItems: 'center',
		margin: 10,
	},
	
	swiper: {
		// width: 300,
		// margin: 20,
		width: '100%',
		height: '100%'
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: Theme.accentColor
	},
	
	labelWrapper: {
		padding: 10
	},
	
	listStyle: {
		margin: 10
	},
	
	closeButton: {
		position: 'absolute',
		left: Screen.width - 120
	}
})

export default MarkerViewComponent