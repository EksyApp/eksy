import React, {Component} from 'react'
import * as Theme from '../Theme'
import {StyleSheet, View} from 'react-native'
import MenuButton from './MenuButton'
import MenuBackButton from './MenuBackButton'
import {PropTypes} from 'prop-types'
import Label from './Label'

class Header extends Component {
	
	render() {
		let button = <MenuButton onPress={this.props.menuButtonPress}/>
		if (this.props.backButton) {
			button = <MenuBackButton />
		}
		
		return (
				<View style={styles.container}>
					{button}
					<Label>{this.props.title}</Label>
				</View>
		)
	}
	
}

Header.propTypes = {
	title: PropTypes.string,
	menuButtonPress: PropTypes.func,
	backButton: PropTypes.bool
}

const styles = StyleSheet.create({
	
	container: {
		height: 50,
		backgroundColor: Theme.frontgroundColor,
		justifyContent: 'center'
	},
	
	
})

export default Header
