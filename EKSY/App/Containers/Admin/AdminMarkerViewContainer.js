import React, {Component} from 'react'
import AdminMarkerViewComponent from "../../Components/Admin/AdminMarkerViewComponent";
import {connect} from "react-redux";
import Dao from "../../Dao/Dao";
import {Actions} from 'react-native-router-flux'
import {MarkerShape, RegionShape} from "../../Utils/PropTypeShapes";

//Renders the admin's marker view and holds it's logic
//This view is for admin to explore a marker's content and to accept or reject it
export class AdminMarkerViewContainer extends Component {

	constructor(props) {
		super(props)
		this.dao = new Dao()
	}

	handleAccept() {
		this.dao.setMarkerStatus(this.props.marker.key, 1)
		Actions.pop()
	}

	handleReject() {
		this.dao.setMarkerStatus(this.props.marker.key, -1)
		Actions.pop()
	}

	handleEdit() {
		Actions.editMarker()
	}
	render() {
		return (
				<AdminMarkerViewComponent
						marker={this.props.marker}
						currentRegion={this.props.currentRegion}
						onAcceptClick={() => this.handleAccept()}
						onRejectClick={() => this.handleReject()}
						onEditClick={() => this.handleEdit()}
				/>
		)
	}



}

AdminMarkerViewContainer.propTypes = {
	marker: MarkerShape,
	currentRegion: RegionShape
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		user: state.auth.user,
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMarkerViewContainer)
