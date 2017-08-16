import React, {Component} from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements'
import * as Theme from '../../Theme'
import PropTypes from 'prop-types';

export default class Input extends Component {
	
	render() {
		return (
				<View>
					<FormLabel labelStyle={styles.labelStyle}>{this.props.label}</FormLabel>
					<FormInput
							underlineColorAndroid='transparent'
							placeholder={this.props.label}
							{...this.props}
							inputStyle={styles.inputStyle}
							containerStyle={styles.containerStyle}
					/>
				</View>
		)
	}
	
}


const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: Theme.frontgroundColor,
		margin: 10
	},
	inputStyle: {
		fontSize: 18,
		color: Theme.fontColor,
	},
	labelStyle: {
		fontSize: 20,
		color: Theme.accentColor
	}
});

Input.propTypes = {
	label: PropTypes.string,
}