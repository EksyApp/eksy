import React, {Component} from 'react'
import RoutesOfMarkerComponent from '../../../Components/Routes/RouteViewing/RoutesOfMarkerComponent'
import {connect} from 'react-redux'
import * as ReduxActions from '../../../Actions/'

export class RoutesOfMarkerContainer extends Component {
	
	render() {
		return(
				<RoutesOfMarkerComponent
						marker={this.props.marker}
				/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerSelected: (marker) => {dispatch(ReduxActions.setMarkerSelected(marker))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesOfMarkerContainer)