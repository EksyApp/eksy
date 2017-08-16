import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import * as Theme from '../../Theme'
import Header from '../Common/Header'
import RouteForm from './RouteForm'
import Button from '../Common/Button'

export default class CreateRouteComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header backButton title="Create a route"/>
					<View>
						<RouteForm
								initialTitle=""
								onTitleChange={this.onTitleChange}
								
								initialText=""
								onTextChange={this.onTextChange}
								
								markers={this.props.markers}
								onMarkerListChange={this.props.onMarkerListChange}
						/>
						<Button onPress={this.onCreateClick}>
							Create
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