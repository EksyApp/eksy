import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

class Image extends Component {
	
	constructor(props) {
		super(props)
		
		let defaultWidth = 500
		let defaultHeight = 500
		if (this.props.containerStyle && this.props.containerStyle.width) {
			defaultWidth = StyleSheet.flatten(this.state.containerStyle).width
		}
		if (this.props.containerStyle && this.props.containerStyle.height) {
			defaultHeight = StyleSheet.flatten(this.state.containerStyle).height
		}
		
		this.state = {
			imageDimensions: {
				width: 500,
				height: 500
			},
			
			viewWidth: 500,
			
			wantedDimensions: {
				width: defaultWidth,
				height: defaultHeight
			},
			
			ViewDimensionKnown: false,
			ImageDimesionsKnown: false
		}
		
		
		Image.getSize(this.props.uri, (width, height) => {
			this._imageOnGetSize(width, height)
		}, (error) => {
			console.warn(error)
		})
		
	}
	
	_viewOnLayout(event) {
		this.setState({
			ViewWidth: event.nativeEvent.width,
			ViewDimensionKnown: true
		})
		this._setImageDimensions()
	}
	
	_imageOnGetSize(width, height) {
		this.setState({
			imageDimensions: {width: width, height: height},
			imageDimensionsKnown: true
		})
		this._setImageDimensions()
	}
	
	_setImageDimensions() {
		if (this.state.ImageDimesionsKnown && this.state.ViewDimensionKnown) {
			let {wantedWidth, wantedHeight} = this._calculateWantedDimensions()
			this.setState({wantedDimensions: {width: wantedWidth, height: wantedHeight}})
		}
	}
	
	_calculateWantedDimensions() {
		let wantedWidth = this.state.viewWidth
		let wantedHeight = (this.state.imageDimensions.height / this.state.imageDimensions.width) * this.state.viewWidth
		return {wantedWidth, wantedHeight}
	}
	
	render() {
		return (
				<View
						style={[style.container, this.props.containerStyle, StyleSheet.create(this.state.wantedDimensions)]}
						onLayout={(event) => {
							this.viewOnLayout(event)
						}}
				>
					<TouchableOpacity onPress={this.props.onPress}>
						<Image
								source={require(this.props.uri)}
								style={[style.image, this.props.imageStyle, StyleSheet.create(this.state.wantedDimensions)]}
						/>
					</TouchableOpacity>
				
				</View>
		)
	}
	
}

Image.propTypes = {
	uri: PropTypes.string.isRequired,
	containerStyle: PropTypes.StyleSheet,
	imageStyle: PropTypes.StyleSheet,
	key: PropTypes.any,
	onPress: PropTypes.func
}

export default Image