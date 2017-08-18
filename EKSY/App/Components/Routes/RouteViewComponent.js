import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import Header from '../Common/Header'
import * as Theme from '../../Theme'
import RouteView from '../Common/RouteView'
import Button from '../Common/Button'
import PropTypes from 'prop-types'
import {RegionShape, RouteShape} from "../../Utils/PropTypeShapes";

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

RouteViewComponent.propTypes = {
	currentRegion: RegionShape,
	route: RouteShape,
	onMarkerClick: PropTypes.func
}