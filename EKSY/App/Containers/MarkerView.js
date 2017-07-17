import React, {Component} from 'react'
import {View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
import {Icon} from 'react-native-elements'
import { Header, Divider, Label, TextArea } from "../Components/Common";
import PictureList from '../Components/PictureList'
import * as ReduxActions from '../Actions'
import {connect} from 'react-redux'
import * as Theme from '../Theme'
import Modal from 'react-native-modal'
import Carousel from 'react-native-snap-carousel'
import FastImage from 'react-native-fast-image'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export class MarkerView extends Component {

	constructor(props) {
		super(props)
		this.itemWidth = (0.85 * Screen.width * 2) / 3
		this.sliderWidth = 0.85 * Screen.width
	}

	_renderImage(image) {
		if (image.uri.startsWith("http")) {
			return (
				<View>
					<FastImage
							resizeMode={FastImage.resizeMode.contain}
							source={{uri: image.uri}}
							style={{width: '100%', height: '100%'}}
					/>
					</View>
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
		if(this.props.marker.images && this.props.marker.images.length > 0) {
			return(
					<View style={styles.imageContainer}>
						<Divider />
						<Label style={styles.label}>Images</Label>
						<View style={styles.carouselContainer}>
							<Carousel
									 itemWidth={this.itemWidth}
									 sliderWidth={this.sliderWidth}
									 enableSnap={true}
									 activeSlideOffset={5}
							 >
							 	{
									this.props.marker.images.map((image, index) => {
									return(
										<View style={{height: 200, width: 200}} key={`$image.uri$index`}>
											{ this._renderImage(image) }
										</View>
									)
								})
							 }
							 </Carousel>
						 </View>
					</View>
			)
		} else {
			return null
		}
	}

	render() {
		// if (!this.props.marker) {
		// 	return null
		// }

//					onModalHide = {this.props.setMarkerViewHidden}
//					onBackButtonPress = {this.props.setMarkerViewHidden}
// react-native-modal:

		return (
				<TouchableWithoutFeedback onPress = {this.props.setMarkerViewHidden}>
					<Modal
						isVisible={this.props.markerViewVisible}
						animationIn = {'slideInUp'}
						animationOut = {'slideInDown'}
						animationInTiming = {100}
						animationOutTiming = {100}
						backdropColor = {'black'}
						backdropOpacity = {0.5}
						onModalHide = {() => this.props.setMarkerViewHidden}
					>
						<TouchableWithoutFeedback onPress ={() => {}}>
								<ScrollView contentContainerStyle={styles.container}>
								<View>
										<Text style={styles.title}>{this.props.marker.title}</Text>
										<TextArea>
											{this.props.marker.text}
										</TextArea>
									{this._renderImages()}
									</View>
								</ScrollView>
						</TouchableWithoutFeedback>

				</Modal>
			</TouchableWithoutFeedback>
		)
	}

}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	title: {
		margin: 10,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	label:{
		margin: 10
	},

	listStyle: {
		margin: 10
	},

	carouselContainer: {
		justifyContent: 'center',
		 alignItems: 'center'
	},

	container: {
		backgroundColor: Theme.backgroundColor,
		borderRadius: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	closeButton: {
		position: 'absolute',
		left: Screen.width - 120
	}

})

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		markerViewVisible: state.ui.markerView.markerViewVisible
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerViewHidden: () => {
			dispatch(ReduxActions.setMarkerViewHidden())
			dispatch(ReduxActions.disableGestures(false))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerView)
