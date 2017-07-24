import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Card, CardSection, Label, TextArea} from './Common'
import Image from 'react-native-fast-image'
import {connect} from 'react-redux'
import * as ReduxActions from '../Actions'

class MarkerCard extends Component {

	handlePress() {
		this.props.setMarkerSelected(this.props.marker)
		this.props.setMarkerViewVisible()
		this.props.disableGestures(true)
	}

	renderWithImage() {
		return (
				<Card style={[styles.container, {width: this.props.width}]}>
					<CardSection style={[styles.imageContainer, {width: this.props.width}]}>
						<Image resizeMode={Image.resizeMode.cover} style={styles.image} source={{uri: this.props.marker.images[0].uri}}/>
					</CardSection>
					<View style={styles.infoContainer}>
						<Label style={styles.title}>{this.props.marker.title}</Label>
					</View>
				</Card>
		)

	}

	renderWithoutImage() {
		return (
				<Card style={[styles.container, {width: this.props.width}]}>
					<CardSection style={styles.infoContainer}>
						<Label style={styles.title}>{this.props.marker.title}</Label>
					</CardSection>

					<TextArea>{this.props.marker.text}</TextArea>

				</Card>
		)
	}

	renderCard() {
		if (this.props.marker.images && this.props.marker.images.length > 0) {
			return this.renderWithImage()
		} else {
			return this.renderWithoutImage()
		}
	}

	render() {
		return(
				<TouchableWithoutFeedback onPress={() => {this.handlePress()}}>
					{this.renderCard()}
				</TouchableWithoutFeedback>
		)
	}


}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch => {
		return {
			setMarkerSelected: (marker) => {
				dispatch(ReduxActions.setMarkerSelected(marker))
			},
			setMarkerViewVisible: () => {
				dispatch(ReduxActions.setMarkerViewVisible())
			},
			disableGestures: (value) => {
				dispatch(ReduxActions.disableGestures(value))
			}
		}
})

const styles = StyleSheet.create({
	container: {
		height: 200
	},

	card: {
		height: "100%",

	},

	imageContainer: {
		height: "70%",
		padding: 0
	},

	image: {
		height: "100%",
		width: "100%"
	},

	infoContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		overflow: "scroll"
	},

	title: {
		marginTop: 10
	}

});

export default connect(mapStateToProps, mapDispatchToProps)(MarkerCard)
