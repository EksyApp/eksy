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
			text: '',
			title: '',
			uri: '',
			images: [],
			filters: []
		}
		
		for (let filter of this.filters) {
			filter.checked = false
		}

		console.log(this)
		this.mapManager = new MapManager()
	}

	addNewMarker() {
		let marker = {
			latitude: this.props.currentRegion.latitude,
			longitude: this.props.currentRegion.longitude,
			text: this.state.text,
			title: this.state.title,
			images: this.state.images,
			filters: this.state.filters
		}
		this.props.addNewMarker(marker);
		Keyboard.dismiss()
		setTimeout(() => this.mapManager.flyToPosition(marker.latitude, marker.longitude), 1000)
		Actions.pop()
	}
	
	
	handleCheckBoxListPress(name, checked) {
		if (checked) {
			this.setState({filters: [...this.state.filters, name]})
		} else {
			this.setState({filters: this.state.filters.filter((filter) => name !== filter)})
		}
	}
	

	render() {
		return (
				<AddMarkerComponent
					images={this.state.images}
					regionChange={this.props.regionChange}
					currentRegion={this.props.currentRegion}
					onTitleChange={(title) => {this.setState({title: title})}}
					onTextChange={(text) => {this.setState({text: text})}}
					onNewImage={(image) => this.setState({images: [...this.state.images, image]})}
					filters={this.filters}
					handleCheckBoxListPress={(name, checked) => {this.handleCheckBoxListPress(name, checked)}}
					addNewMarkerButtonClick={() => {this.addNewMarker()}}
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
		menuButtonPress: () => {
			dispatch(ReduxActions.drawerOpen())
		},
		regionChange: (region) => {
			dispatch(ReduxActions.updateRegion(region))
		},
		addNewMarker: (marker) => {
			dispatch(ReduxActions.addNewMarker(marker))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarkerContainer)