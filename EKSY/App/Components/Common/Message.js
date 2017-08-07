import React, {Component} from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'
import * as Theme from '../../Theme'

export class Message extends Component {
	
	render() {
		return(
				<Text {...this.props} style={[style.text, this.props.style]} />
		)
	}
	
}

const style = StyleSheet.create({
	text: {
		textAlign: 'center',
		width: '100%',
		fontSize: 18,
		color: Theme.fontColor
	}
})

export default Message
