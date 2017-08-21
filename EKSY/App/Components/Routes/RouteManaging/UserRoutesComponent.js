import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Header from '../../Common/Header'
import * as Theme from '../../../Theme/index'
import Button from '../../Common/Button'
import Message from '../../Common/Message'
import RouteCardList from '../RouteViewing/RouteCardList'
import Container from '../../Common/Container'

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