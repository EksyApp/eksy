import React, {Component} from 'react'
import {Modal, TouchableWithoutFeedback} from 'react-native'
import MarkerView from "./MarkerView";
import {Actions} from 'react-native-router-flux'

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
						<MarkerView
								marker = {this.props.marker}
								user = {this.props.user}
						    onEditClick={() => {
						    	Actions.editMarker()
							    this.props.setMarkerViewHidden()
						    }}
						/>
					</Modal>
				</TouchableWithoutFeedback>
		)
	}
}
