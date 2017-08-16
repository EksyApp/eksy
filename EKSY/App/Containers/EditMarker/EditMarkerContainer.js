import React, {Component} from 'react'
import EditMarkerComponent from "../../Components/EditMarker/EditMarkerComponent";
import {Alert} from 'react-native'
import Dao from "../../Dao/Dao";
import Filters from "../../Data/Filters";
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {MarkerShape, RegionShape} from "../../Utils/PropTypeShapes";

export class EditMarkerContainer extends Component {
	
	constructor(props) {
		super(props)
		
		this.dao = new Dao();
		this.filters = [...Filters.mainFilters];
		
		this.state = {
			region: {
				...this.props.currentRegion,
				latitude: this.props.selectedMarker.latitude,
				longitude: this.props.selectedMarker.longitude
			},
			text: this.props.selectedMarker.text,
			title: this.props.selectedMarker.title,
			images: this.props.selectedMarker.images ? this.props.selectedMarker.images : [] ,
			filters: this.props.selectedMarker.filters ? this.props.selectedMarker.filters : []
		}
		
		if(this.state.filters) {
			for (let filter of this.filters) {
				if (this.state.filters.includes(filter.name)) {
					filter.checked = true
				} else {
					filter.checked = false
				}
			}
		}
		
		
	}
	
	onFilterChange(name, checked) {
		if (checked) {
			this.setState({filters: [...this.state.filters, name]})
		} else {
			this.setState({filters: this.state.filters.filter((filter) => name !== filter)})
		}
	}
	
	saveMarker() {
		this.props.selectedMarker.latitude = this.state.region.latitude
		this.props.selectedMarker.longitude = this.state.region.longitude
		this.props.selectedMarker.text = this.state.text
		this.props.selectedMarker.title = this.state.title
		this.props.selectedMarker.images = this.state.images
		this.props.selectedMarker.filters = this.state.filters
		
		
		this.dao.updateMarker(this.props.selectedMarker)
		Actions.pop()
	}
	
	deleteMarker() {
		Alert.alert(
				'Delete marker',
				'Are you sure you want to delete the marker?',
				[
					{text: 'No', onPress: () => {}},
					{text: 'Yes', onPress: () => {
						this.dao.removeMarker(this.props.selectedMarker)
						Actions.pop()
					}}
				]
		)
		
	}
	
	render() {
		return (
				<EditMarkerComponent
						initialRegion={{
							...this.props.currentRegion,
							latitude: this.props.selectedMarker.latitude,
							longitude: this.props.selectedMarker.longitude
						}}
						
						onRegionChange={(region) => {
							this.setState({region: region})
						}}
						
						initialTitle={this.state.title}
						onTitleChange={(title) => {
							this.setState({title: title})
						}}
						
						initialText={this.state.text}
						onTextChange={(text) => {
							this.setState({text: text})
						}}
						
						images={this.state.images}
						onNewImage={(image) => {
							this.setState({images: [...this.state.images, image]})
						}}
						
						filters={this.filters}
						onFilterChange={(name, checked) => {
							this.onFilterChange(name, checked)
						}}
						
						onSaveClick={() => {
							this.saveMarker()
						}}
						onDeleteClick={() => {
							this.deleteMarker()
						}}
				/>
		)
	}
	
}

EditMarkerContainer.propTypes = {
	currentRegion: RegionShape,
	selectedMarker: MarkerShape,
}

const mapStateToProps = (state) => {
	return {
		selectedMarker: state.markers.markerSelected,
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMarkerContainer)