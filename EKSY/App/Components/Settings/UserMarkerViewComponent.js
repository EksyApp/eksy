import React, {Component} from 'react'
import {ScrollView, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import MarkerView from "../Common/MarkerView";
import Button from "../Common/Button";
import * as Theme from "../../Theme";
import PropTypes from 'prop-types'
import {MarkerShape, RegionShape} from "../../Utils/PropTypeShapes";

export default class UserMarkerViewComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header title="Your marker" backButton />
					<ScrollView style={styles.container}>
						<MarkerView
								marker={this.props.marker}
								currentRegion={this.props.currentRegion}
						/>
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

UserMarkerViewComponent = {
	marker: MarkerShape,
	currentRegion: RegionShape,
	onEditClick: PropTypes.func
}