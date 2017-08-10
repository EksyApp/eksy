import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import * as Theme from "../../Theme";
import Message from '../Common/Message'
import MarkerCardList from '../Common/MarkerCardList'
import Label from "../Common/Label";
import Button from "../Common/Button";


export default class UserMarkersComponent extends Component {
	
	
	
	renderList() {
		if(this.props.loading) {
			return(<Message>Loading</Message>)
		} else {
			return(<MarkerCardList data={this.props.userMarkers} onPress={this.props.onCardClick} style={styles.card} />)
		}
	}
	
	render () {
		return (
				<View style={styles.container}>
					<Header title='Your markers' backButton />
					<Button onPress={this.props.onRefresh}>
						Refersh
					</Button>
					{this.renderList()}
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
	},
	
	card: {
		width: '95%',
		alignSelf: 'center'
	}
})
