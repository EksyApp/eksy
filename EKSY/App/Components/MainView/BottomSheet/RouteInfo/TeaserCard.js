import React, {Component} from 'react'
import Card from '../../../Common/Card'
import Label from '../../../Common/Label'
import Message from '../../../Common/Message'
import Geometry from '../../../../Utils/Geometry'
import {StyleSheet} from 'react-native'

export default class TeaserCard extends Component {
	
	getDistance() {
		return Math.round(Geometry.distance(this.props.currentLocation, this.props.nextMarker) * 1000)
	}
	
	render() {
		return (
				<Card style={[styles.container, {width: this.props.width}, this.props.style]}>
					<Label>
						Next marker
					</Label>
					<Message>
						{this.getDistance() + 'm away'}
					</Message>
				</Card>
		)
	}
	
	
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		marginLeft: 0,
		width: '100%'
	}
})