import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserRoutesComponent from '../../Components/Routes/UserRoutesComponent'
import Dao from '../../Dao/FirebaseDao'
import * as ReduxActions from '../../Actions'
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'

export class UserRoutesContainer extends Component {
	
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
		let routes = await new Dao().getUserRoutes()
		this.setState({loading: false, routes})
	}
	
	handleCardClick(route) {
		this.props.setRouteSelected(route)
		Actions.routeView()
	}
	
	render() {
		return(
			<UserRoutesComponent
					loading={this.state.loading}
					routes={this.state.routes}
					onRefresh={() => this.refresh()}
					onCardClick={(route) => this.handleCardClick(route)}
			/>
		)
	}
}

UserRoutesContainer.propTypes = {
	setRouteSelected: PropTypes.func,
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setRouteSelected: (route) => {
			dispatch(ReduxActions.setRouteSelected(route))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRoutesContainer)