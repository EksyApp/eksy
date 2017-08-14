import React, {Component} from 'react'
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native'
import PropTypes from 'prop-types'
import Image from './Image'
import FastImage from 'react-native-fast-image'

class Picture extends Component {

	constructor(props) {
		super(props)

		let defaultWidth = this.props.data.width
		let defaultHeight = this.props.data.height

		if (this.props.containerStyle && StyleSheet.flatten(this.props.containerStyle).width) {
			defaultWidth = StyleSheet.flatten(this.props.containerStyle).width
		}
		if (this.props.containerStyle && StyleSheet.flatten(this.props.containerStyle).height) {
			defaultHeight = StyleSheet.flatten(this.props.containerStyle).height
		}


		this.ViewWidth = this.props.data.width

		this.ViewDimensionKnown = false
		this.wantedCalculated = false;

		this.state = {
			wantedDimensions: {
				dimensions: {
					width: defaultWidth,
					height: defaultHeight
				}
			},
		}

	}

	_viewOnLayout(event) {
		this.ViewDimensionKnown = true
		this.ViewWidth = event.nativeEvent.layout.width
		this._setImageDimensions()
	}


	_setImageDimensions() {
		if (this.ViewDimensionKnown && !this.wantedCalculated) {
			let {wantedWidth, wantedHeight} = this._calculateWantedDimensions()
			this.wantedCalculated = true;
			this.setState({wantedDimensions: {dimensions: {width: wantedWidth, height: wantedHeight}}})
		}
	}

	_calculateWantedDimensions() {
		let wantedWidth = this.ViewWidth
		let wantedHeight = (this.props.data.height / this.props.data.width) * this.ViewWidth
		return {wantedWidth, wantedHeight}
	}


	render() {

		let containerStyle = [style.container];
		if (this.props.containerStyle) {
			containerStyle.push(this.props.containerStyle)
		}
		containerStyle.push(StyleSheet.create(this.state.wantedDimensions).dimensions)


		let imageStyle = [style.image];
		if (this.props.imageStyle) {
			imageStyle.push(this.props.imageStyle)
		}
		imageStyle.push(StyleSheet.create(this.state.wantedDimensions).dimensions);

		return (
				<View
						style={containerStyle}
						onLayout={(event) => {
							this._viewOnLayout(event)
						}}
				>
					<TouchableWithoutFeedback onPress={this.props.onPress}>
						<Image
								resizeMode={FastImage.resizeMode.cover}
								source={this.props.source != null ? this.props.source : {uri: this.props.data.uri}}
								style={imageStyle}
						/>
					</TouchableWithoutFeedback>

				</View>
		)
	}

}

const style = StyleSheet.create({
	image: {}
})

// Picture.propTypes = {
// 	data: PropTypes.shape({
// 		width: PropTypes.number.isRequired,
// 		height: PropTypes.number.isRequired,
// 		uri: PropTypes.string
// 	}),
// 	key: PropTypes.any,
// 	onPress: PropTypes.func
// }

export default Picture
