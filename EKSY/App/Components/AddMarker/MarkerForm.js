import React, {Component} from 'react'
import PointSelector from "../Common/PointSelector";
import {View, StyleSheet} from "react-native";
import TextInputArea from "../Common/TextInputArea";
import ImagePicker from "../Common/ImagePicker";
import CompactPictureList from "../Common/CompactPictureList";
import CheckBoxList from "../Common/CheckBoxList";
import Message from "../Common/Message";
import Input from "../Common/Input";

export default class MarkerForm extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			imageResponse: ""
		}
	}
	
	render() {
		return (
				<View>
						<View style={styles.selectorContainer}>
							<PointSelector
									style={styles.selector}
									initialRegion={this.props.initialRegion}
							    onChange={(region) => {this.props.onRegionChange(region)}}
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
							<Message>{this.state.imageResponse}</Message>
							<ImagePicker
									buttonText="Add image"
									onNewImage={(image) => {
										this.setState({imageResponse: "Image added!"})
										this.props.onNewImage(image)
									}}
									onPickerError={(error) => this.setState({imageResponse: error.message})}
									onUriError={(error) => this.setState({imageResponse: error.message})}
							/>
							<CompactPictureList
									data={this.props.images}
							/>
							<CheckBoxList
									data={this.props.filters}
									onPress={(name, checked) => {this.props.onFilterChange(name, checked)}}
									titleKey="addingDescription"
							/>
						</View>
				</View>
		)
	}
	
}
const styles = StyleSheet.create({
	
	selectorContainer: {
		height: 300,
		width: '100%'
	},
	
	selector: {
		width: '100%',
		height: '100%'
	}
	
})