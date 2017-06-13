import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements'
import * as Theme from '../Theme'

class TextArea extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {height: 0}
	}
	
	render() {
		return (
				<View>
					<FormLabel labelStyle={styles.labelStyle}>{this.props.label}</FormLabel>
					<FormInput
							value={this.props.value}
							onChangeText={this.props.onChangeText}
							underlineColorAndroid='transparent'
							autoCorrect={this.props.autoCorrect}
							placeholder={this.props.placeholder}
							secureTextEntry={this.props.secureTextEntry}
							inputStyle={[styles.inputStyle, {height: Math.max(45, this.state.height)}]}
							containerStyle={[styles.containerStyle]}
					    
					    multiline
					    onChange={(event) => this.setState({height: event.nativeEvent.contentSize.height})}
					/>
				</View>
		)
	}
	
	
}

export default TextArea;

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
