import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dao from "../../Dao/Dao"
import * as ReduxActions from "../../Actions";
import {Actions} from 'react-native-router-flux'
import ConfirmMarkersComponent from "../../Components/Admin/ConfirmMarkersComponent";

//Renders the admin's list of unconfirmed markers and holds its logic
//Clickable list of markers leads to admins marker view to govern markers
export class ConfirmMarkersContainer extends Component {

	constructor(props){
		super(props)
		this.dao= new Dao()
		this.state={
			loading: true,
			pendingMarkers: null,
		}
	}

	componentWillMount() {
		this.refresh()
	}

	refresh() {
		this.setState({loading: true})
		this.getMarkers()
	}

	async getMarkers() {
		let markers = await this.dao.getPendingMarkers()
		markers.sort((a,b) => {
			return markerTimeCompare(a, b);
		})
		this.setState({loading: false, pendingMarkers: markers})
	}

	handlePress(marker) {
		this.props.setMarkerSelected(marker)
		Actions.adminMarkerView()
	}

	render () {
		return (
				<ConfirmMarkersComponent
						loading={this.state.loading}
						pendingMarkers={this.state.pendingMarkers}
						onRefresh={() => {this.refresh()}}
						onCardClick={(marker) => {this.handlePress(marker)}}
				/>
		)
	}
}

let markerTimeCompare = function (a, b) {
	let aTime
	let bTime
	if (a.editInfo) {
		aTime = a.editInfo.lastEdited
	} else {
		aTime = a.creationInfo.createdAt
	}
	if (b.editInfo) {
		bTime = b.editInfo.lastEdited
	} else {
		bTime = b.creationInfo.createdAt
	}
	return aTime - bTime
};


const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerSelected: (marker) => {
			dispatch(ReduxActions.setMarkerSelected(marker))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmMarkersContainer)
