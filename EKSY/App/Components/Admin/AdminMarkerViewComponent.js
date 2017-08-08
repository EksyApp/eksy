import React, {Component} from 'react'
import MarkerView from "../MainView/MarkerModal/MarkerView";
import Header from "../Common/Header";
import {View, StyleSheet, ScrollView} from "react-native";
import {Actions} from 'react-native-router-flux'
import * as Theme from "../../Theme";
import Button from "../Common/Button";

export default class AdminMarkerViewComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header title="Confirm Marker" backButton />
					<ScrollView style={styles.container}>
						<View style={styles.markerViewContainer}>
							<MarkerView
									marker={this.props.marker}
									user={this.props.user}
									onEditClick={() => {
										Actions.editMarker()
									}}
							/>
						</View>
						
						<Button onPress={this.props.onAcceptClick}>
							Accept
						</Button>
						<Button onPress={this.props.onRejectClick}>
							Reject
						</Button>
					</ScrollView>
					
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	},
	
	markerViewContainer: {
		height: 600
	}
})