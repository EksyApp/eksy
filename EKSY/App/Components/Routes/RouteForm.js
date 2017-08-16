import React, {Component} from 'react'
import {View} from 'react-native'
import Input from '../Common/Input'
import TextInputArea from '../Common/TextInputArea'
import EditableMarkerList from './EditableMarkerList'

export default class RouteForm extends Component {
	
	render() {
		return(
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
		)
	}
	
}