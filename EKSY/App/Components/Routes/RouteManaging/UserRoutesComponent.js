import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Header from '../../Common/Header'
import * as Theme from '../../../Theme/index'
import Button from '../../Common/Button'
import Message from '../../Common/Message'
import RouteCardList from '../RouteViewing/RouteCardList'
import Container from '../../Common/Container'
import PropTypes from 'prop-types'
import {RoutesShape} from "../../../Utils/PropTypeShapes";


//Renders a view for user to select route from list of routes
//RouteCard takes to RouteViewComponent
export default class UserRoutesComponent extends Component {

	renderList() {
		if (this.props.loading) {
			return (<Message>Loading</Message>)
		} else {
			return (<RouteCardList routes={this.props.routes} onPress={this.props.onCardClick} style={styles.card}/>)
		}
	}

	render() {
		return (
				<Container backButton title="Your Routes">
					<Button onPress={this.props.onRefresh}>
						Refresh
					</Button>
					{this.renderList()}
				</Container>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	},

	card: {
		width: '95%',
		alignSelf: 'center'
	}
})

UserRoutesComponent.propTypes = {
	loading: PropTypes.bool,
	routes: RoutesShape,
	onCardClick: PropTypes.func,
	onRefresh: PropTypes.func
}
