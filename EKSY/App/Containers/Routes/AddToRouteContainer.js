import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddToRouteComponent from '../../Components/Routes/AddToRouteComponent'
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'
import {MarkerShape} from '../../Utils/PropTypeShapes'
import Dao from '../../Dao/Dao'

export class AddToRouteContainer extends Component {
	
	constructor(props) {
		super(props)
		
		this.state={
			loading: true,
			routes: []
		}
		
		this.refresh()
	}
	
	refresh() {
		this.setState({loading: true})
		this.getRoutes()
	}
	
	async getRoutes() {
		let routes = await new Dao().getUserRoutes()
		this.setState({loading: false, routes})
	}
	
	handleCreateClick() {
		Actions.createRoute()
	}
	
	handleRouteClick(route) {
		route.markers.push(this.props.marker.key)
		new Dao().updateRoute(route)
		Actions.pop()
	}
	
	render() {
		return (
				<AddToRouteComponent
						onCreateClick={() => this.handleCreateClick()}
						loading={this.state.loading}
						routes={this.state.routes}
						onRouteClick={(route) => this.handleRouteClick(route)}
				/>
		)
	}
	
	
}

AddToRouteContainer.propTypes = {
	marker: MarkerShape
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToRouteContainer)