import React, {Component} from 'react'
import AdminMarkerViewComponent from "../../Components/Admin/AdminMarkerViewComponent";
import {connect} from "react-redux";
import * as ReduxActions from "../../Actions/index";
import Dao from "../../Dao/Dao";

export class AdminMarkerViewContainer extends Component {
	
	constructor(props) {
		super(props)
		this.dao = new Dao()
	}
	
	handleAccept() {
		this.dao.setMarkerStatus(this.props.marker.key, 1)
	}
	
	handleReject() {
		this.dao.setMarkerStatus(this.props.marker.key, -1)
	}
	
	render() {
		return (
				<AdminMarkerViewComponent
						marker={this.props.marker}
						user={this.props.user}
						onAcceptClick={() => this.handleAccept()}
						onRejectClick={() => this.handleReject()}
				/>
		)
	}
	
	
}


const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMarkerViewContainer)