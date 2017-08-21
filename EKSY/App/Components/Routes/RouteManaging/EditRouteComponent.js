import React, {Component} from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import Header from '../../Common/Header'
import * as Theme from '../../../Theme/index'
import RouteForm from './RouteForm'
import Button from '../../Common/Button'
import Container from '../../Common/Container'
import PropTypes from 'prop-types'
import {RegionShape, MarkersShape} from '../../../Utils/PropTypeShapes'

//Renders the view to edit route's metadata
//Contains RouteForm and buttons to save and delete
export default class EditRouteComponent extends Component {

	render() {
		return (
				<Container backButton title="Route">
					<RouteForm
							initialRegion={this.props.currentRegion}
							initialTitle={this.props.initialTitle}
							initialText={this.props.initialText}
							onTitleChange={this.props.onTitleChange}
							onTextChange={this.props.onTextChange}
							markers={this.props.markers}
							onMarkerListChange={this.props.onMarkerListChange}
					/>
					<Button onPress={() => this.props.onSaveClick()}>
						Save
					</Button>
					<Button onPress={() => this.props.onDeleteClick()}>
						Delete
					</Button>
				</Container>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	},

})

EditRouteComponent.propTypes = {
	currentRegion: RegionShape,
	initialTitle: PropTypes.string,
	initialText: PropTypes.string,
	onTitleChange: PropTypes.func,
	onTextChange: PropTypes.func,
	markers: MarkersShape,
	onMarkerListChange: PropTypes.func,
	onSaveClick: PropTypes.func,
	onDeleteClick: PropTypes.func
}
