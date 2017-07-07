import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import * as Theme from '../../Theme'

export class Label extends Component {
	render() {
		return(
				<Text {...this.props} style={[style.text, this.props.style]} />
		)
	}
}

const style = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontSize: 20,
		color: Theme.accentColor,
		fontWeight: 'bold',
	}
})

export default Label
