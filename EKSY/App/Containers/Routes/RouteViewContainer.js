import React, {Component} from 'react'
import {connect} from 'react-redux'
import RouteViewComponent from '../../Components/Routes/RouteViewComponent'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../../Actions'
import Proptypes from 'prop-types'
import {RegionShape, RouteShape} from "../../Utils/PropTypeShapes";

export class RouteViewContainer extends Component {
	
	handleMarkerClick(marker) {
		this.props.setMarkerSelected(marker)
		Actions.markerView()
	}
	
	render() {
		return(
				<RouteViewComponent
						route={this.props.route}
						currentRegion={this.props.currentRegion}
						onMarkerClick={(marker) => this.handleMarkerClick(marker)}
				/>
		)
	}
}

RouteViewContainer.propTypes = {
	setMarkerSelected: Proptypes.func,
	route: RouteShape,
	currentRegion: RegionShape
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

export default connect(mapStateToProps, mapDispatchToProps)(RouteViewContainer)