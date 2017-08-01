import React, {Component} from 'react'
import BottomSheetComponent from "../../Components/MainView/BottomSheetComponent";
import {connect} from "react-redux";
import * as ReduxActions from "../../Actions";

class BottomSheetContainer extends Component {
	
	render() {
		return (
			<BottomSheetComponent
				markerList={this.props.markerList}
			  setMarkerSelected={this.props.setMarkerSelected}
			  setMarkerViewVisible={this.props.setMarkerViewVisible}
			  disableGestures={this.props.disableGestures}
			/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		markerList: state.markers.markerList,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerSelected: (marker) => {
			dispatch(ReduxActions.setMarkerSelected(marker))
		},
		setMarkerViewVisible: () => {
			dispatch(ReduxActions.setMarkerViewVisible())
		},
		disableGestures: (value) => {
			dispatch(ReduxActions.disableGestures(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheetContainer)