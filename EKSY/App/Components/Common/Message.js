import React, {Component} from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'
import * as Theme from '../../Theme'
import PropTypes from 'prop-types';

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


Message.PropTypes = {
style : PropTypes.object
}

export default Message
