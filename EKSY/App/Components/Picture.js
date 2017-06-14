import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native'
import PropTypes from 'prop-types'



class Picture extends Component {
	
	constructor(props) {
		super(props)
		
		console.log(props)
		let defaultWidth = 500
		let defaultHeight = 500
		if (this.props.containerStyle && StyleSheet.flatten(this.props.containerStyle).width) {
			defaultWidth = StyleSheet.flatten(this.props.containerStyle).width
		}
		if (this.props.containerStyle && StyleSheet.flatten(this.props.containerStyle).height) {
			defaultHeight = StyleSheet.flatten(this.props.containerStyle).height
		}
		
		this.ImageDimensions = {
			width: 500,
			height: 500
		}
		
		this.ViewWidth = 500
		
		this.ViewDimensionKnown = false
		this.ImageDimensionsKnown = false
		this.wantedCalculated = false;
		
		this.state = {
			wantedDimensions: {
				dimensions: {
					width: defaultWidth,
					height: defaultHeight
				}
			},
		}
		
		Image.getSize(this.props.uri, (width, height) => {
			this._imageOnGetSize(width, height)
		}, (error) => {
			this.setState({wantedDimensions: {dimensions: {width: 0, height: 0}}})
			console.warn(error)
		})
		
	}
	
	_viewOnLayout(event) {
		this.ViewDimensionKnown = true
		this.ViewWidth = event.nativeEvent.layout.width
		this._setImageDimensions()
	}
	
	_imageOnGetSize(width, height) {
		this.ImageDimensionsKnown = true
		this.ImageDimensions = {width: width, height: height}
		this._setImageDimensions()
	}
	
	_setImageDimensions() {
		if (this.ImageDimensionsKnown && this.ViewDimensionKnown && !this.wantedCalculated) {
			let {wantedWidth, wantedHeight} = this._calculateWantedDimensions()
			this.wantedCalculated = true;
			this.setState({wantedDimensions: {dimensions: {width: wantedWidth, height: wantedHeight}}})
		}
	}
	
	_calculateWantedDimensions() {
		let wantedWidth = this.ViewWidth
		let wantedHeight = (this.ImageDimensions.height / this.ImageDimensions.width) * this.ViewWidth
		return {wantedWidth, wantedHeight}
	}
	
	render() {
		
		let containerStyle = [style.container];
		if(this.props.containerStyle) {
			containerStyle.push(this.props.containerStyle)
		}
		containerStyle.push(StyleSheet.create(this.state.wantedDimensions).dimensions)
		
		
		let imageStyle = [style.image];
		if(this.props.imageStyle) {
			imageStyle.push(this.props.imageStyle)
		}
		imageStyle.push(StyleSheet.create(this.state.wantedDimensions).dimensions);

		console.log(this)
		return (
				<View
						style={containerStyle}
						onLayout={(event) => {
							this._viewOnLayout(event)
						}}
				>
					<TouchableOpacity onPress={this.props.onPress}>
						<Image
								source={{uri: this.props.uri}}
								style={imageStyle}
						/>
					</TouchableOpacity>
				
				</View>
		)
	}
	
}

const style = StyleSheet.create({
	image: {
		resizeMode: 'contain'
	}
})

Picture.propTypes = {
	uri: PropTypes.string.isRequired,
	key: PropTypes.any,
	onPress: PropTypes.func
}

export default Picture