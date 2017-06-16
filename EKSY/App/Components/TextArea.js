import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import * as Theme from '../Theme'

class TextArea extends Component {
	
	render() {
		return(
				<Text {...this.props} style={[style.text, this.props.style]} />
		)
	}
	
}

const style = StyleSheet.create({
	text: {
		fontSize: 18,
		color: Theme.fontColor,
		margin: 10,
	}
})

export default TextArea