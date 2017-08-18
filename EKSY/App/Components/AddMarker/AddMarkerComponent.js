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

	buttonContainer: {
		marginTop: 10,
		marginBottom: 20
	},

})

export default AddMarkerComponent
