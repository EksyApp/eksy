import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import * as Theme from '../../Theme'
const BasicCheckBox = require('react-native-elements').CheckBox


export class CheckBox extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			checked: this.props.checked !== null ? this.props.checked : false
		}
		
	}
	
	_handlePress() {
		this.setState({checked: !this.state.checked})
		this.props.onPress(this.props.name, !this.state.checked);
	}
	
	render() {
		return (
				<BasicCheckBox
						{...this.props}
						containerStyle={[style.checkboxContainer, this.props.containerStyle]}
						textStyle={[style.checkboxText, this.props.textStyle]}
						checked={this.state.checked}
						onPress={() => {this._handlePress()}}
				/>
		)
		
	}
	
}

const style = StyleSheet.create({
	checkboxContainer: {
		backgroundColor: Theme.frontgroundColor
	},
	
	checkboxText: {
		color: Theme.fontColor
	}
})