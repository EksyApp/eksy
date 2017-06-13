import React, {Component} from 'react'
import {Icon} from 'react-native-elements'
import * as Theme from '../Theme'
import {Actions} from 'react-native-router-flux'

class MenuBackButton extends Component {
	
	
	
	render() {
		return(
				<Icon onPress={() => {Actions.pop()}} name="arrow-back" iconStyle={style.iconStyle} containerStyle={style.buttonStyle} size={35} />
		)
	}
}

const style = {
	buttonStyle: {
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1,
		width: 50,
		height: 50
	},
	
	iconStyle: {
		color: Theme.accentColor,
	}
}
export default MenuBackButton
