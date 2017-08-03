import React, {Component} from 'react'
import Header from "../Common/Header";
import MarkerForm from "../AddMarker/MarkerForm";
import Button from "../Common/Button";
import {ScrollView, View, StyleSheet} from "react-native";
import * as Theme from "../../Theme";

export default class EditMarkerComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header title='Edit Marker' backButton/>
					<ScrollView>
						<MarkerForm
								initialRegion={this.props.initialRegion}
								onRegionChange={this.props.onRegionChange}
								
								initialTitle={this.props.initialTitle}
								onTitleChange={this.props.onTitleChange}
								
								initialText={this.props.initialText}
								onTextChange={this.props.onTextChange}
								
								images={this.props.images}
								onNewImage={this.props.onNewImage}
								
								filters={this.props.filters}
								onFilterChange={this.props.onFilterChange}
						/>
						<View style={styles.buttonContainer}>
							<Button onPress={() => {this.props.onSaveClick()}}>
								Save changes
							</Button>
							<Button onPress={() => {this.props.onDeleteClick()}}>
								Delete marker
							</Button>
						</View>
						
					</ScrollView>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.backgroundColor,
		flex: 1
	},
	
	buttonContainer: {
		marginTop: 10,
		marginBottom: 20
	},
	
})