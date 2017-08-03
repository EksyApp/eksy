import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import * as Theme from "../../Theme/index";
import {Button, Header} from "../../Components/Common/index";
import MarkerForm from "./MarkerForm";

class AddMarkerComponent extends Component {
	
	
	
	render() {
		return (
				<View style={styles.container}>
					<Header title='Add Marker' backButton/>
					<ScrollView>
						<MarkerForm
								initialRegion={this.props.initialRegion}
								onRegionChange={this.props.onRegionChange}
								
								initialTitle=""
								onTitleChange={this.props.onTitleChange}
								
								initialText=""
								onTextChange={this.props.onTextChange}
								
								images={this.props.images}
								onNewImage={this.props.onNewImage}
								
								filters={this.props.filters}
								onFilterChange={this.props.onFilterChange}
						/>
						<View style={styles.buttonContainer}>
							<Button onPress={() => {
								this.props.onAddMarkerClick()
							}}>
								Add marker
							</Button>
						</View>
					</ScrollView>
				</View >
		
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
		marginBottom: 20
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


// <View style={styles.container}>
// <View style={styles.mapContainer}>
// <PointSelector onChange={(region) => {
// 	this.props.regionChange(region)
// }} initialRegion={this.props.currentRegion} style={styles.map}/>
// </View>
// <ScrollView>
// <View style={styles.formContainer}>
// <Input label="Title" onChangeText={(text) => this.props.onTitleChange(text)}/>
// <TextInputArea label="Text" onChangeText={(text) => this.props.onTextChange(text)}/>
// { this.renderImageList() }
// <Label>{this.state.imageResponse}</Label>
// <ImagePicker
// buttonText="Add image"
// onNewImage={(image) => {
// 	this.setState({imageResponse: "Image added!"})
// 	this.props.onNewImage(image)
// }}
// onPickerError={(error) => this.setState({imageResponse: error.message})}
// onUriError={(error) => this.setState({imageResponse: error.message})}
// />
// <CheckBoxList
// data={this.props.filters}
// onPress={(name, checked) => {this.props.onFilterChange(name, checked)}}
// titleKey="addingDescription"
// 		/>
// 		</View>