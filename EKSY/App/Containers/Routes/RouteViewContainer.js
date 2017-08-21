import React, {Component} from 'react'
import {connect} from 'react-redux'
import RouteViewComponent from '../../Components/Routes/RouteViewComponent'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../../Actions'
import Proptypes from 'prop-types'
import {RegionShape, RouteShape} from "../../Utils/PropTypeShapes";

//Renders the view for user to see a route and holds it's logic
//Consists of RouteViewComponent that holds routeView and edit button
//Edit button takes to editRouteComponent
export class RouteViewContainer extends Component {

	handleMarkerClick(marker) {
		this.props.setMarkerSelected(marker)
		Actions.markerView()
	}

	handleEditClick() {
		Actions.editRoute()
	}

	render() {
		return(
				<RouteViewComponent
						route={this.props.route}
						currentRegion={this.props.currentRegion}
						onMarkerClick={(marker) => this.handleMarkerClick(marker)}
						onEditClick={() => this.handleEditClick()}
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
