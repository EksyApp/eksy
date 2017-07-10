import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
import {Icon} from 'react-native-elements'
import { Header, Divider, Label, TextArea } from "../Components/Common";
import PictureList from '../Components/PictureList'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../Actions'
import {connect} from 'react-redux'
import * as Theme from '../Theme'

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
		return(
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

	container: {
		backgroundColor: Theme.backgroundColor,
		position: 'absolute',
		top: 10,
		bottom: 40,
		left: 0,
		right: 0,
		margin: 40,
		borderRadius: 20,
		flex: 1
	},

	closeButton: {
		position: 'absolute',
		left: Screen.width - 120
	}

})

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		visible: state.ui.markerView.markerViewVisible
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		markerViewClose: () => {
			dispatch(Actions.markerViewClose())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerView)
