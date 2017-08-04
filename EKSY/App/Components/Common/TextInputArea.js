import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements'
import * as Theme from '../../Theme'

export class TextInputArea extends Component {

	constructor(props) {
		super(props)

		this.state = {height: 0}
	}
	
	
	render() {
		return (
				<View>
					<FormLabel labelStyle={styles.labelStyle}>{this.props.label}</FormLabel>
					<FormInput
							ref = {(input) => this._input  = input}
							underlineColorAndroid='transparent'
							placeholder={this.props.label}
							{...this.props}
							inputStyle={[styles.inputStyle, this.props.inputStyle, {height: Math.max(45, this.state.height)}]}
							containerStyle={[styles.containerStyle, this.props.containerStyle]}

					    multiline
					    onChange={(event) => {
					    	this.setState({height: event.nativeEvent.contentSize.height})
						    this.props.onChange != null ? this.props.onChange(event) : false
					    }}
					/>
				</View>
		)
	}


}

export default TextInputArea;

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
