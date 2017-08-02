import React, {Component} from 'react'
import PictureList from '../Common/PictureList'
import {View, StyleSheet, ScrollView} from 'react-native'
import PointSelector from '../../Components/AddMarker/PointSelector'
import * as Theme from '../../Theme/index'
import { Header, Button, Label, TextInputArea } from '../../Components/Common/index'
import CheckBoxList from '../../Components/Common/CheckBoxList'
import ImagePicker from "../Common/ImagePicker";
import CompactPictureList from "../Common/CompactPictureList";
import Input from "../Common/Input";

class AddMarkerComponent extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			imageResponse: ""
		}
		
	}
	
	renderImageList() {
		if (this.props.images && this.props.images.length > 0) {
			return (
					<CompactPictureList data={this.props.images} listStyle={styles.listStyle} imageContainerStyle={styles.imageContainer} />
			)
		}
		
		return null
	}
	
	render() {
		return (
				<View style={styles.container}>
					<Header title='Add Marker' backButton/>
					<View style={styles.container}>
						<View style={styles.mapContainer}>
							<PointSelector onChange={(region) => {
								this.props.regionChange(region)
							}} currentRegion={this.props.currentRegion} style={styles.map}/>
						</View>
						<ScrollView>
							<View style={styles.formContainer}>
								<Input label="Title" onChangeText={(text) => this.props.onTitleChange(text)}/>
								<TextInputArea label="Text" onChangeText={(text) => this.props.onTextChange(text)}/>
								{ this.renderImageList() }
								<Label>{this.state.imageResponse}</Label>
								<ImagePicker
										buttonText="Add image"
										onNewImage={(image) => {
											this.setState({imageResponse: "Image added!"})
											this.props.onNewImage(image)
										}}
								    onPickerError={(error) => this.setState({imageResponse: error.message})}
										onUriError={(error) => this.setState({imageResponse: error.message})}
								/>
								<CheckBoxList
										data={this.props.filters}
										onPress={(name, checked) => {this.props.handleCheckBoxListPress(name, checked)}}
										titleKey="addingDescription"
								/>
							</View>
							<View style={styles.buttonContainer}>
								
								<Button onPress={() => {
									this.props.addNewMarkerButtonClick()
								}}>
									Add marker
								</Button>
							</View>
						</ScrollView>
					
					</View>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.backgroundColor,
		flex: 1
	},
	
	mapContainer: {
		height: '50%',
		width: '100%'
	},
	
	buttonContainer: {
		marginTop: 10,
		marginBottom:20
	},
	
	map: {
		...StyleSheet.absoluteFillObject
	},
	
	textArea: {
		flex: 1,
		textAlignVertical: 'top',
		width: '100%',
		backgroundColor: Theme.frontgroundColor,
		marginTop: 20
	},
	
	listStyle: {
		padding: 5
	},
	
	imageContainer: {
		width: "100%"
	}
	
})

export default AddMarkerComponent