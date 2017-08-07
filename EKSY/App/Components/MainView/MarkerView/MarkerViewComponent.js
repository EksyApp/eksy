import React, {Component} from 'react'
import {Modal, ScrollView, TouchableWithoutFeedback, View, Dimensions, StyleSheet} from 'react-native'
import Label from "../../Common/Label";
import ViewMoreText from "../../Common/ViewMoreText";
import * as Theme from "../../../Theme/Colors";
import Divider from "../../Common/Divider";
import Picture from "../../Common/Picture";
import {Actions} from 'react-native-router-flux'
import PictureSwiper from "../../Common/PictureSwiper";
import {Icon} from 'react-native-elements'
import TextArea from "../../Common/TextArea";


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
	
	
	_renderImages() {
		if (this.props.marker.images && this.props.marker.images.length > 0) {
			return (
					<View
							style={[!this.state.isCollapsed && styles.renderImagesCollapsed, this.state.isCollapsed && styles.renderImagesExpanded]}>
						<View style={styles.labelWrapper}>
							<Divider/>
						</View>
						
						<PictureSwiper data={this.props.marker.images}/>
					</View>
			)
		} else {
			return null
		}
	}
	
	_renderText() {
		if (this.props.marker.images && this.props.marker.images.length > 0) {
			return (<ViewMoreText
							numberOfLines={1}
							afterCollapse={this._setCollapsed}
							afterExpand={this._setExpanded}
					>
						{this.props.marker.text}
					</ViewMoreText>
			)
		} else {
			return (
					<TextArea>
								{this.props.marker.text}
					</TextArea>
			)
		}
		
	}
	
	_renderEditingIcon() {
		if (this.props.user && this.props.marker && this.props.marker.creationInfo && this.props.user.uid === this.props.marker.creationInfo.user) {
			return(
					<Icon
							name="edit"
							size={25}
							containerStyle={styles.editIcon}
							onPress={() => {
								Actions.editMarker()
								this.props.setMarkerViewHidden()
							}}
					/>
			)
		}
	}
	
	_renderTitleAndText() {
		return (
				<View
						style={this.state.isCollapsed ? styles.titleAndTextWrapperCollapsed : styles.titleAndTextWrapperExpanded}
				>
					<View style={styles.titleContainer}>
						<Label style={styles.title}>{this.props.marker.title}</Label>
						{this._renderEditingIcon()}
					</View>
					
					<ScrollView>
						{this._renderText()}
					</ScrollView>
				</View>
		)
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
							{this._renderTitleAndText()}
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
	},
	
	editIcon: {
		position: 'absolute',
		top: 0,
		right: 0,
		
	},
	
	titleContainer: {
		width: '100%'
	}
})

export default MarkerViewComponent