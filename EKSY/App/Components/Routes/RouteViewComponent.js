import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import Header from '../Common/Header'
import * as Theme from '../../Theme'
import Route from '../Common/Route'
import Label from '../Common/Label'
import MarkerCardList from '../Common/MarkerCardList'
import TextArea from '../Common/TextArea'
import Divider from '../Common/Divider'
import RouteView from '../Common/RouteView'
import Button from '../Common/Button'

export default class RouteViewComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header backButton title="Route"/>
					<ScrollView style={styles.container}>
						<RouteView
								initialRegion={this.props.currentRegion}
								route={this.props.route}
								onMarkerClick={this.props.onMarkerClick}
						/>
						<Button onPress={() => this.props.onEditClick()}>
							Edit
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