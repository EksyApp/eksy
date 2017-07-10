import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
import {Icon} from 'react-native-elements'
import { Header, Divider, Label, TextArea } from "../Components/Common";
import PictureList from '../Components/PictureList'
import * as ReduxActions from '../Actions'
import {connect} from 'react-redux'
import * as Theme from '../Theme'
import Modal from 'react-native-modal'

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export class MarkerView extends Component {

	_renderImages() {
		if(this.props.marker.images && this.props.marker.images.length > 0) {
			return(
					<View>
						<Divider />
						<Label>Images</Label>
						<PictureList data={this.props.marker.images} listStyle={style.listStyle} imageContainerStyle={style.imageContainer} />
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

		return (
				<TouchableWithoutFeedback onPress = {this.props.setMarkerViewHidden}>
					<Modal
						isVisible={this.props.markerViewVisible}
						animationIn = {'slideInUp'}
						animationOut = {'slideInDown'}
						animationInTiming = {1000}
						animationOutTiming = {1000}
						backdropColor = {'black'}
						backdropOpacity = {0.5}
						onModalHide = {() => this.props.setMarkerViewHidden}
					>
						<TouchableWithoutFeedback onPress ={() => {}}>
							<View style={style.container}>
								<ScrollView>
									<View style={style.title}>
										<Text>{this.props.marker.title}</Text>
									</View>
									<View>
										<TextArea>
											{this.props.marker.text}
										</TextArea>
									</View>

									{this._renderImages()}

								</ScrollView>
							</View>
						</TouchableWithoutFeedback>
				</Modal>
			</TouchableWithoutFeedback>
		)
	}

}

const style = StyleSheet.create({
	imageContainer: {
		width: '100%',
	},

	title: {
		margin: 10
	},

	listStyle: {
		margin: 10
	},

	modalContainer: {
		flex: 1,
	},

	container: {
		backgroundColor: Theme.backgroundColor,
		margin: 40,
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerView)
