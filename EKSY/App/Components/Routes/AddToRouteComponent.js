import React, {Component} from 'react'
import Header from '../Common/Header'
import {View, StyleSheet} from 'react-native'
import Button from '../Common/Button'
import * as Theme from '../../Theme'
import PropTypes from 'prop-types'
import Divider from '../Common/Divider'
import RouteCardList from './RouteCardList'
import Message from '../Common/Message'
import {RoutesShape} from '../../Utils/PropTypeShapes'

export default class AddToRouteComponent extends Component {
	
	
	renderRoutes() {
		if(this.props.loading) {
			return(
					<Message>Loading...</Message>
			)
		} else {
			return(
					<RouteCardList
							routes={this.props.routes}
							onPress={this.props.onRouteClick}
					/>
			)
		}
	}
	
	
	render() {
		return(
				<View style={styles.container}>
					<Header backButton title="Add to route"/>
					<View style={styles.container}>
						<Button onPress={this.props.onCreateClick}>
							Create a new route
						</Button>
						<Divider/>
						{this.renderRoutes()}
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

AddToRouteComponent.propTypes = {
	onCreateClick: PropTypes.func,
	onRouteClick: PropTypes.func,
	routes: RoutesShape,
	loading: PropTypes.bool
}
