import React, {Component} from 'react'
import Button from "./Button";
import Picker from 'react-native-image-picker'
import {Image} from 'react-native'
import PropTypes from 'prop-types';

export default class ImagePicker extends Component {
	
	render() {
		return (
				<Button onPress={() => this._buttonClick()}>
					{this.props.buttonText}
				</Button>
		)
	}
	
	_buttonClick() {
		let options = {
			title: 'Select image',
			noData: true,
			storageOptions: {
				skipBackup: true,
			},
			maxWidth: 800,
			maxHeight: 800
		}
		
		options = this.props.options != null ? this.props.options : options
		
		Picker.showImagePicker(options, (response) => {
			
			if (response.didCancel) {
				this.props.onPickerCancelled != null ? this.props.onPickerCancelled() : false;
			} else if (response.error) {
				this.props.onPickerError != null ? this.props.onPickerError(response.error) : false
			} else {
				this._addImage(response.uri)
			}
		})
	}
	
	_addImage(uri) {
		Image.getSize(uri, (width, height) => {
			this._imageUriWorks(uri, width, height)
		}, (error) => {
			this._imageUriError(error)
		})
	}
	
	_imageUriWorks(uri, width, height) {
		this.props.onNewImage({uri, width, height})
	}
	
	_imageUriError(error) {
		this.props.onUriError !== null ? this.props.onUriError(error) : false;
	}
}

ImagePicker.PropTypes = {
	buttonText: PropTypes.string,
	options: PropTypes.object,
	onPickerCancelled: PropTypes.func,
	onPickerError: PropTypes.func,
	onNewImage: PropTypes.func,
	onUriError: PropTypes.func,
}