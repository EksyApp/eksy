import React, {Component} from 'react'
import Header from "../Common/Header";
import {View, StyleSheet, ScrollView} from "react-native";
import {Actions} from 'react-native-router-flux'
import * as Theme from "../../Theme";
import Button from "../Common/Button";
import MarkerView from "../Common/MarkerView";

export default class AdminMarkerViewComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header title="Confirm Marker" backButton />
					<ScrollView style={styles.container}>
						<MarkerView
								marker={this.props.marker}
								currentRegion={this.props.currentRegion}
						/>
						<Button onPress={this.props.onAcceptClick}>
							Accept
						</Button>
						<Button onPress={this.props.onRejectClick}>
							Reject
						</Button>
						<Button onPress={this.props.onEditClick}>
							Edit
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
	}
})