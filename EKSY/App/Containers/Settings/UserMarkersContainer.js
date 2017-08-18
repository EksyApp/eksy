import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dao from "../../Dao/Dao"
import * as ReduxActions from "../../Actions";
import {Actions} from 'react-native-router-flux'
import UserMarkersComponent from "../../Components/Settings/UserMarkersComponent";
import PropTypes from 'prop-types'

//Renders a list of user's markers and holds it's logic
//List component (marker) takes to user's marker view
export class UserMarkersContainer extends Component {
	
	constructor(props){
		super(props)
		this.dao= new Dao()
		this.state={
			loading: true,
			userMarkers: null,
		}
		this.getMarkers()
	}
	
	refresh() {
		this.setState({loading: true})
		this.getMarkers()
	}
	
	async getMarkers() {
		let markers = await this.dao.getUserMarkers()
		this.setState({loading: false, userMarkers: markers})
	}
	
	handlePress(marker) {
		this.props.setMarkerSelected(marker)
		Actions.markerView()
	}
	
	render () {
		return (
				<UserMarkersComponent
						loading={this.state.loading}
						userMarkers={this.state.userMarkers}
						onRefresh={() => {this.refresh()}}
						onCardClick={(marker) => {this.handlePress(marker)}}
				/>
		)
	}
}

UserMarkersContainer.propTypes = {
	setMarkerSelected: PropTypes.func,
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerSelected: (marker) => {
			dispatch(ReduxActions.setMarkerSelected(marker))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMarkersContainer)
