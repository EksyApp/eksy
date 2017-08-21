import React, {Component} from 'react'
import {Modal, TouchableWithoutFeedback} from 'react-native'
import MarkerModalView from "./MarkerModalView";
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'
import {MarkerShape, UserShape} from "../../../Utils/PropTypeShapes";

export default class MarkerModalComponent extends Component {
	
	render() {
		return (
				<TouchableWithoutFeedback onPress={this.props.setMarkerViewHidden}>
					<Modal
							visible={this.props.markerViewVisible}
							animationType={'fade'}
							transparent
							onRequestClose={this.props.setMarkerViewHidden}
					>
						<MarkerModalView
								marker = {this.props.marker}
								user = {this.props.user}
						    onEditClick={() => {
						    	Actions.editMarker()
							    this.props.setMarkerViewHidden()
						    }}
								onAddClick={() => {
									Actions.addToRoute()
									this.props.setMarkerViewHidden()
								}}
								routeIsActive={this.props.routeIsActive}
						/>
					</Modal>
				</TouchableWithoutFeedback>
		)
	}
}

MarkerModalComponent.propTypes = {
	setMarkerViewHidden: PropTypes.func,
	markerViewVisible: PropTypes.bool,
	marker: MarkerShape,
	user: UserShape,
	routeIsActive: PropTypes.bool
}