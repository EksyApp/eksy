import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import * as Theme from '../../../Theme/index'
import Header from '../../Common/Header'
import RouteForm from './RouteForm'
import Button from '../../Common/Button'
import PropTypes from 'prop-types'
import {MarkersShape} from '../../../Utils/PropTypeShapes'
import Container from '../../Common/Container'

export default class CreateRouteComponent extends Component {
	
	render() {
		return (
				<Container backButton title="Create a route">
					<RouteForm
							initialRegion={this.props.currentRegion}
							
							initialTitle=""
							onTitleChange={this.props.onTitleChange}
							
							initialText=""
							onTextChange={this.props.onTextChange}
							
							markers={this.props.markers}
							onMarkerListChange={this.props.onMarkerListChange}
					/>
					<Button onPress={this.props.onCreateClick}>
						Create
					</Button>
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

CreateRouteComponent.propTypes = {
	markers: MarkersShape,
	onMarkerListChange: PropTypes.func
}
