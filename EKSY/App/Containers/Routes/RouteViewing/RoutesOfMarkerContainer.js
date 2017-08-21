import React, {Component} from 'react'
import RoutesOfMarkerComponent from '../../../Components/Routes/RouteViewing/RoutesOfMarkerComponent'
import {connect} from 'react-redux'
import * as ReduxActions from '../../../Actions/'
import Dao from '../../../Dao/Dao'
import {Actions} from 'react-native-router-flux'

export class RoutesOfMarkerContainer extends Component {
	
	constructor(props) {
		super(props)
		
		this.state={
			loading: true,
			routes: []
		}
		
		this.getRoutes()
		
	}
	
	refresh() {
		this.setState({loading: true})
		this.getRoutes()
	}
	
	async getRoutes() {
		let routes = await new Dao().getRoutesOfMarker(this.props.marker)
		this.setState({routes, loading:false})
	}
	
	handleCardClick(route) {
		this.props.setActiveRoute(route)
		this.props.routeIsActive(true)
		Actions.pop()
	}
	
	render() {
		return(
				<RoutesOfMarkerComponent
						routes={this.state.routes}
						loading={this.state.loading}
						onCardClick={(route) => this.handleCardClick(route)}
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
		setActiveRoute: (route) => {dispatch(ReduxActions.setRouteActive(route))},
		routeIsActive: (state) => {dispatch(ReduxActions.routeIsActive(state))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesOfMarkerContainer)