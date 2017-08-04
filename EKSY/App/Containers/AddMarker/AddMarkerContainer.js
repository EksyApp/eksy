import React, {Component} from 'react'
import {Keyboard} from 'react-native'
import MapManager from '../../Utils/MapManager'
import * as ReduxActions from '../../Actions/index'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import Dao from '../../Dao/Dao'
import Filters from '../../Data/Filters'
import AddMarkerComponent from "../../Components/AddMarker/AddMarkerComponent";

export class AddMarkerContainer extends Component {
	constructor(props) {
		super(props)
		
		this.dao = new Dao();
		this.filters = [...Filters.mainFilters];

		this.state = {
			region: this.props.currentRegion,
			text: '',
			title: '',
			images: [],
			filters: []
		}
		
		for (let filter of this.filters) {
			filter.checked = false
		}

		this.mapManager = new MapManager()
	}

	addNewMarker() {
		let marker = {
			latitude: this.state.region.latitude,
			longitude: this.state.region.longitude,
			text: this.state.text,
			title: this.state.title,
			images: this.state.images,
			filters: this.state.filters
		}
		this.dao.addMarker(marker)
		Keyboard.dismiss()
		setTimeout(() => this.mapManager.flyToPosition(marker.latitude, marker.longitude), 1000)
		Actions.pop()
	}
	
	
	onFilterChange(name, checked) {
		if (checked) {
			this.setState({filters: [...this.state.filters, name]})
		} else {
			this.setState({filters: this.state.filters.filter((filter) => name !== filter)})
		}
	}
	

	render() {
		return (
				<AddMarkerComponent
						
						initialRegion={this.props.currentRegion}
						onRegionChange={(region) => this.setState({region: region})}
						
						onTitleChange={(title) => {this.setState({title: title})}}
						
						onTextChange={(text) => {this.setState({text: text})}}
						
						images={this.state.images}
						onNewImage={(image) => this.setState({images: [...this.state.images, image]})}
						
						filters={this.filters}
						onFilterChange={(name, checked) => {this.onFilterChange(name, checked)}}
						
						onAddMarkerClick={() => {this.addNewMarker()}}
				  
				/>
		)
	}

	
}


const mapStateToProps = (state) => {
	return {
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarkerContainer)
