import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Input from '../../Common/Input'
import TextInputArea from '../../Common/TextInputArea'
import EditableMarkerList from './EditableMarkerList'
import PropTypes from 'prop-types'
import {MarkersShape} from "../../../Utils/PropTypeShapes";
import Route from '../../Common/Route'

//Renders a view to manage route's metadata
export default class RouteForm extends Component {

	render() {
		return(
				<View>
					<View style={styles.mapContainer}>
						<Route
								style={styles.map}
								initialRegion={this.props.initialRegion}
								markers={this.props.markers}
						/>
					</View>
					<View>
						<Input
								label="Title"
								defaultValue={this.props.initialTitle}
								onChangeText={(title) => {this.props.onTitleChange(title)}}
						/>
						<TextInputArea
								label="Text"
								defaultValue={this.props.initialText}
								onChangeText={(text) => {this.props.onTextChange(text)}}
						/>
						<EditableMarkerList
								markers={this.props.markers}
								onChange={this.props.onMarkerListChange}
						/>
					</View>

				</View>
		)
	}
}

const styles = StyleSheet.create({
	mapContainer: {
		height: 300,
		width: '100%'
	},

	map: {
		width: '100%',
		height: '100%'
	}
})

RouteForm.propTypes = {
	initialTitle: PropTypes.string,
	initialText: PropTypes.string,
	onTitleChange: PropTypes.func,
	onTextChange: PropTypes.func,
	markers: MarkersShape,
	onMarkerListChange: PropTypes.func
}
