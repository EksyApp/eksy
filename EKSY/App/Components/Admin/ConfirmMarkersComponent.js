import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import * as Theme from "../../Theme";
import Message from '../Common/Message'
import MarkerCardList from '../Common/MarkerCardList'
import Label from "../Common/Label";
import Button from "../Common/Button";
import PropTypes from 'prop-types';
import { MarkersShape } from '../../Utils/PropTypeShapes'
import Container from '../Common/Container'


//Renders list of unconfirmed markers
//MarkerCards in MarkerCardList takes to AdminMarkerViewComponent
export default class ConfirmMarkersComponent extends Component {

	renderList() {
		if(this.props.loading) {
			return(<Message>Loading</Message>)
		} else {
			return(<MarkerCardList data={this.props.pendingMarkers} onPress={this.props.onCardClick} style={styles.card} />)
		}
	}

	render () {
		return (
				<Container title='Admin Tools' backButton>
					<Label>Confirm markers</Label>
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
		backgroundColor: Theme.backgroundColor,
	},

	card: {
		width: '95%',
		alignSelf: 'center'
	}
})


ConfirmMarkersComponent.propTypes = {
	loading: PropTypes.bool,
	pendingMarkers: MarkersShape,
	onCardClick: PropTypes.func,
	onRefresh: PropTypes.func
}
