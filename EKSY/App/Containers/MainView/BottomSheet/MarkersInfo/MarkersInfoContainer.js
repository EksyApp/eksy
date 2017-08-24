import React, {Component} from 'react'
import MarkerInfoComponent from '../../../../Components/MainView/BottomSheet/MarkerInfo/MarkerInfoComponent'
import {connect} from 'react-redux'
import * as ReduxActions from '../../../../Actions'
import PropTypes from 'prop-types'
import {MarkersShape} from '../../../../Utils/PropTypeShapes'

export class MarkersInfoContainer extends Component {

	handleMarkerClick(marker) {
		this.props.setMarkerSelected(marker)
		this.props.setMarkerViewVisible()
		this.props.disableGestures(true)
	}
	
	render() {
		return(
				<MarkerInfoComponent
						markerList={this.props.markerList}
						onMarkerClick={(marker) => this.handleMarkerClick(marker)}
				/>
		)
	}
	
}

MarkersInfoContainer.propTypes = {
	setMarkerSelected: PropTypes.func,
	setMarkerViewVisible: PropTypes.func,
	disableGestures: PropTypes.func,
	markerList: MarkersShape,
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

export default connect(mapStateToProps, mapDispatchToProps)(MarkersInfoContainer)