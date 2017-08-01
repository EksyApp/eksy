import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import {Card, CardSection, Label, TextArea} from '../Common/index'
import Image from 'react-native-fast-image'

export default class MarkerCard extends Component {

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

const styles = StyleSheet.create({
	container: {
		height: 200,
		marginLeft: 0,
	},

	imageContainer: {
		width: "100%",
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
