import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import * as Theme from "../../Theme/index";
import {Button, Header} from "../../Components/Common/index";
import MarkerForm from "./MarkerForm";
import PropTypes from 'prop-types';
import { RegionShape, ImagesShape, FiltersShape } from '../../Utils/PropTypeShapes'
import Container from '../Common/Container'


/* Component shows form for new marker addition.
	Gets props from AddMarkerContainer.
 */

class AddMarkerComponent extends Component {
	
	render() {
		return (
				<Container backButton title="Add marker">
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
				</Container>
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

AddMarkerComponent.propTypes = {
	initialRegion: RegionShape,
	onRegionChange:PropTypes.func,
	onTitleChange:PropTypes.func,
	onTextChange:PropTypes.func,
	images: ImagesShape,
	onNewImage: PropTypes.func,
	filters: FiltersShape,
	onFilterChange:PropTypes.func,
	onAddMarkerClick:PropTypes.func
}

export default AddMarkerComponent
