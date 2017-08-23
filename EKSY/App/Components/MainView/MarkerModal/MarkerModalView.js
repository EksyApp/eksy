import React, {Component} from 'react'
import * as Theme from '../../../Theme'
import {ScrollView, View, StyleSheet} from 'react-native'
import Divider from '../../Common/Divider'
import ViewMoreText from '../../Common/ViewMoreText'
import TextArea from '../../Common/TextArea'
import PictureSwiper from '../../Common/PictureSwiper'
import Label from '../../Common/Label'
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types'
import {MarkerShape, UserShape} from '../../../Utils/PropTypeShapes'


//Renders marker view inside main view's modal component (MarkerViewComponent)
export default class MarkerModalView extends Component {

	constructor(props) {
		super(props)
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
							style={[!this.state.isCollapsed && styles.imagesCollapsed, this.state.isCollapsed && styles.imagesExpanded]}>
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
		if (
				this.props.user
				&& this.props.marker
				&& this.props.marker.creationInfo
				&& (
						this.props.user.firebaseUser.uid === this.props.marker.creationInfo.user
						|| this.props.user.admin
				)
		) {
			return (
					<Icon
							name="edit"
							size={25}
							containerStyle={styles.icon}
							onPress={this.props.onEditClick}
					/>
			)
		}
	}

	_renderAddToRouteIcon() {
		if (this.props.user) {
			return (
					<Icon
							name="playlist-add"
							size={25}
							containerStyle={styles.icon}
							onPress={this.props.onAddClick}
					/>
			)
		}
	}

	_renderPlayIcon() {
		if (!this.props.routeIsActive) {
			return (
					<Icon
							name="playlist-play"
							size={25}
							containerStyle={styles.icon}
							onPress={this.props.onPlayClick}
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
						<View style={styles.iconHolder}>
							{this._renderEditingIcon()}
							{this._renderAddToRouteIcon()}
							{this._renderPlayIcon()}
						</View>

					</View>

					<ScrollView>
						{this._renderText()}
					</ScrollView>
				</View>
		)
	}

	render() {
		return (
				<View style={styles.content}>
					{this._renderTitleAndText()}
					{this._renderImages()}
				</View>
		)
	}
}

const styles = StyleSheet.create({

	content: {
		backgroundColor: Theme.backgroundColor,
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 20,
		margin: 20,
		flex: 1
	},

	imagesCollapsed: {
		justifyContent: 'center',
		height: 0
	},
	imagesExpanded: {
		flex: 1,
		justifyContent: 'center',
		margin: 5
	},

	titleAndTextWrapperCollapsed: {
		alignItems: 'center',
		margin: 10,
		height: 100
	},

	titleAndTextWrapperExpanded: {
		flex: 1,
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

	icon: {
		marginLeft: 5
	},

	titleContainer: {
		width: '100%'
	},

	iconHolder: {
		width: '100%',
		height: 25,
		flexDirection: 'row-reverse',
		position: 'absolute',
		top: 0,
		left: 0
	}
})

MarkerModalView.propTypes = {
	marker: MarkerShape,
	user: UserShape,
	onEditClick: PropTypes.func,
	onAddClick: PropTypes.func,
	onPlayClick: PropTypes.func,
	routeIsActive: PropTypes.bool
}
