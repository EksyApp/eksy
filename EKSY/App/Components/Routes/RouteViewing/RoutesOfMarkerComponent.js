import React, {Component} from 'react'
import Container from '../../Common/Container'
import RouteCardList from './RouteCardList'
import {StyleSheet} from 'react-native'
import Message from '../../Common/Message'

export default class RoutesOfMarkerComponent extends Component {
	
	renderList() {
		if(this.props.loading) {
			return(<Message>Loading...</Message>)
		} else {
			return(<RouteCardList routes={this.props.routes} onPress={(route) => this.props.onCardClick(route)} style={styles.card}/>)
		}
	}
	
	render() {
		return(
				<Container backButton title="Start a route">
					{this.renderList()}
				</Container>
		)
	}
	
}

const styles = StyleSheet.create({
	card: {
		width: '95%',
		alignSelf: 'center'
	}
})
