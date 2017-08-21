import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import Header from '../../Common/Header'
import * as Theme from '../../../Theme/index'
import RouteView from '../../Common/RouteView'
import Button from '../../Common/Button'
import PropTypes from 'prop-types'
import {RegionShape, RouteShape} from "../../../Utils/PropTypeShapes";
import Container from '../../Common/Container'

//Renders a view that contains RouteView and edit button
//RouteView shows the route's metadata
//Edit button takes to EditRouteComponent
export default class RouteViewComponent extends Component {

	render() {
		return(
				<Container backButton title="Route">
					<RouteView
							initialRegion={this.props.currentRegion}
							route={this.props.route}
							onMarkerClick={this.props.onMarkerClick}
					/>
					<Button onPress={() => this.props.onEditClick()}>
						Edit
					</Button>
				</Container>
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
