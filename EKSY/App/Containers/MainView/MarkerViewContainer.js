import React, {Component} from "react";
import * as ReduxActions from "../../Actions/index";
import {connect} from "react-redux";
import MarkerViewComponent from "../../Components/MainView/MarkerViewComponent";



export class MarkerViewContainer extends Component {
	
	render() {
		return (
				<MarkerViewComponent
				marker = {this.props.marker}
				markerViewVisible = {this.props.markerViewVisible}
				setMarkerViewHidden = {this.props.setMarkerViewHidden}
				/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		markerViewVisible: state.ui.markerView.markerViewVisible,
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

export default connect(mapStateToProps, mapDispatchToProps)(MarkerViewContainer)
