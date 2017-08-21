import React, {Component} from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import Header from '../Common/Header'
import MarkerView from '../Common/MarkerView'
import Button from '../Common/Button'
import * as Theme from '../../Theme'
import PropTypes from 'prop-types'
import {MarkerShape, RegionShape} from '../../Utils/PropTypeShapes'
import Container from '../Common/Container'

export default class MarkerViewComponent extends Component {
	
	renderEditButton() {
		if (this.props.user && this.props.user.firebaseUser.uid === this.props.marker.creationInfo.user) {
			return (
					<Button onPress={this.props.onEditClick}>
						Edit
					</Button>
			)
		}
	}
	
	render() {
		return (
				<Container title="Marker" backButton>
					<MarkerView
							marker={this.props.marker}
							currentRegion={this.props.currentRegion}
					/>
					{this.renderEditButton()}
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

MarkerViewComponent.propTypes = {
	marker: MarkerShape,
	currentRegion: RegionShape,
	onEditClick: PropTypes.func
}