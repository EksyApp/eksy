import React, {Component} from 'react'
import Header from '../Common/Header'
import {View, StyleSheet} from 'react-native'
import Button from '../Common/Button'
import * as Theme from '../../Theme'

export default class AddToRouteComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header backButton title="Add to route"/>
					<View style={styles.container}>
						<Button onPress={this.props.onCreateClick}>
							Create a new route
						</Button>
					</View>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	}
})