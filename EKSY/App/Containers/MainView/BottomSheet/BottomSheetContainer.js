import React, {Component} from 'react'
import BottomSheetComponent from "../../../Components/MainView/BottomSheet/BottomSheetComponent";
import {connect} from "react-redux";
import * as ReduxActions from "../../../Actions/index";
import PropTypes from 'prop-types'
import {MarkersShape} from "../../../Utils/PropTypeShapes";

//Renders the drawable bottomsheet and handles it's logic 
class BottomSheetContainer extends Component {

	render() {
		return (
			<BottomSheetComponent
				routeIsActive={this.props.routeIsActive}
				markerList={this.props.markerList}
			/>
		)
	}

}

BottomSheetContainer.propTypes = {
	routeIsActive: PropTypes.bool,
	markerList: MarkersShape
}

const mapStateToProps = (state) => {
	return {
		routeIsActive: state.routes.routeActive.active,
		markerList: state.markers.markerList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheetContainer)
