import React, {Component} from 'react'
import RoutesOfMarkerComponent from '../../../Components/Routes/RouteViewing/RoutesOfMarkerComponent'
import {connect} from 'react-redux'
import * as ReduxActions from '../../../Actions/'

export class RoutesOfMarkerContainer extends Component {
	
	render() {
		return(
				<RoutesOfMarkerComponent/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		route: state.routes.routeSelected,
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerSelected: (marker) => {dispatch(ReduxActions.setMarkerSelected(marker))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesOfMarkerContainer)