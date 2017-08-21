import React, {Component} from 'react'
import * as Theme from '../../Theme'
import {ScrollView, View, StyleSheet} from 'react-native'
import Header from './Header'
import PropTypes from 'prop-types'

export default class Container extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header backButton={this.props.backButton} title={this.props.title} menuButtonPress={this.props.menuButtonPress}/>
					<ScrollView {...this.props} style={[styles.container, this.props.style]}/>
				</View>
		)
	}
	
}

Container.propTypes = {
		...ScrollView.propTypes,
	backButton: PropTypes.bool,
	title: PropTypes.string,
	menuButtonPress: PropTypes.func
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	},
	
})