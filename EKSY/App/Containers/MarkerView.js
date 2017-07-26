import React, {Component} from "react";
import {Dimensions, Image, Modal, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {Divider, Label} from "../Components/Common";
import * as ReduxActions from "../Actions";
import {connect} from "react-redux";
import * as Theme from "../Theme";
import FastImage from "react-native-fast-image";
import Swiper from "react-native-swipe-a-lot";
import ViewMoreText from "../Components/Common/ViewMoreText";


const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export class MarkerView extends Component {
	
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
							<Label>Images</Label>
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
		justifyContent: 'center'
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
		// textAlign: 'center'
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

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		markerViewVisible: state.ui.markerView.markerViewVisible,
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
