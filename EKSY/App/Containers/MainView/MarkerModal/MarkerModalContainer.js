import React, {Component} from "react";
import * as ReduxActions from "../../../Actions/index";
import {connect} from "react-redux";
import MarkerModalComponent from "../../../Components/MainView/MarkerModal/MarkerModalComponent";



export class MarkerModalContainer extends Component {
	
	render() {
		return (
				<MarkerModalComponent
					marker = {this.props.marker}
					markerViewVisible = {this.props.markerViewVisible}
					setMarkerViewHidden = {this.props.setMarkerViewHidden}
					user = {this.props.user}
				/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		markerViewVisible: state.ui.markerView.markerViewVisible,
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerViewHidden: () => {
			dispatch(ReduxActions.setMarkerViewHidden())
			dispatch(ReduxActions.disableGestures(false))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerModalContainer)