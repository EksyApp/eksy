import React, {Component} from 'react'
import Header from '../../Common/Header'
import {View, StyleSheet} from 'react-native'
import Button from '../../Common/Button'
import * as Theme from '../../../Theme/index'
import PropTypes from 'prop-types'
import Divider from '../../Common/Divider'
import RouteCardList from '../RouteViewing/RouteCardList'
import Message from '../../Common/Message'
import {RoutesShape} from '../../../Utils/PropTypeShapes'
import Container from '../../Common/Container'

export default class AddToRouteComponent extends Component {
	
	
	renderRoutes() {
		if (this.props.loading) {
			return (
					<Message>Loading...</Message>
			)
		} else {
			return (
					<RouteCardList
							routes={this.props.routes}
							onPress={this.props.onRouteClick}
					/>
			)
		}
	}
	
	
	render() {
		return (
				<Container backButton title="Add to route">
					<Button onPress={this.props.onCreateClick}>
						Create a new route
					</Button>
					<Divider/>
					{this.renderRoutes()}
				</Container>
		)
	}
	
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	}
})

AddToRouteComponent.propTypes = {
	onCreateClick: PropTypes.func,
	onRouteClick: PropTypes.func,
	routes: RoutesShape,
	loading: PropTypes.bool
}
