import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native'
import PropTypes from 'prop-types'



class Picture extends Component {
	
	constructor(props) {
		super(props)
		
		console.log(props)
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
				dimensions: {
					width: defaultWidth,
					height: defaultHeight
				}
			},
			
			ViewDimensionKnown: false,
			ImageDimesionsKnown: false
		}
		console.log("init")
		console.log(this.state)
		
		Image.getSize(this.props.uri, (width, height) => {
			this._imageOnGetSize(width, height)
		}, (error) => {
			console.warn(error)
		})
		
	}
	
	_viewOnLayout(event) {
		console.log("ViewOnLayout")
		console.log(this.state)
		this.setState({
			ViewWidth: event.nativeEvent.width,
		})
		this.setState({
			ViewDimensionKnown: true
		})
		console.log(this.state)
		this._setImageDimensions()
	}
	
	_imageOnGetSize(width, height) {
		console.log("imageOnGetSize")
		console.log(this.state)
		this.setState({
			imageDimensions: {width: width, height: height},
		})
		this.setState({
			imageDimensionsKnown: true
		})
		console.log(this.state)
		this._setImageDimensions()
	}
	
	_setImageDimensions() {
		console.log("SetImageDimensions")
		console.log(this.state)
		if (this.state.ImageDimesionsKnown && this.state.ViewDimensionKnown) {
			let {wantedWidth, wantedHeight} = this._calculateWantedDimensions()
			this.setState({wantedDimensions: {dimensions: {width: wantedWidth, height: wantedHeight}}})
		}
		console.log(this.state)
	}
	
	_calculateWantedDimensions() {
		let wantedWidth = this.state.viewWidth
		let wantedHeight = (this.state.imageDimensions.height / this.state.imageDimensions.width) * this.state.viewWidth
		console.log([wantedWidth, wantedHeight])
		return {wantedWidth, wantedHeight}
	}
	
	render() {
		console.log("Render")
		console.log(this.state)
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
		console.log(this.state)
		console.log(containerStyle)
		console.log(imageStyle)
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
	container: {
		color: 'white'
	},
	
	image: {
		color: 'white'
	}
})

Picture.propTypes = {
	uri: PropTypes.string.isRequired,
	key: PropTypes.any,
	onPress: PropTypes.func
}

export default Picture