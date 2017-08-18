import React, {Component} from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import Header from '../Common/Header'
import * as Theme from '../../Theme'
import RouteForm from './RouteForm'
import Button from '../Common/Button'

export default class EditRouteComponent extends Component {
	
	render() {
		return (
				<View style={styles.container}>
					<Header backButton title="Route"/>
					<ScrollView style={styles.container}>
						<RouteForm
								initialRegion={this.props.currentRegion}
								initialTitle={this.props.initialTitle}
								initialText={this.props.initialText}
								onTitleChange={this.props.onTitleChange}
								onTextChange={this.props.onTextChange}
								markers={this.props.markers}
								onMarkerListChange={this.props.onMarkerListChange}
						/>
						<Button onPress={() => this.props.onSaveClick()}>
							Save
						</Button>
						<Button onPress={() => this.props.onDeleteClick()}>
							Delete
						</Button>
					</ScrollView>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	},
	
})