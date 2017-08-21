import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminToolsComponent from "../../Components/Admin/AdminToolsComponent";
import * as ReduxActions from "../../Actions";
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'

//Renders the admin's main view and it's logic
export class AdminToolsContainer extends Component {

//Admin can adjust the radius (distance) of markers visible
	
	handleRadius(radius) {
		radius = parseInt(radius)
		radius = radius/1000
		if(!isNaN(radius) && radius > 0) {
			this.props.updateRadius(radius)
		}
	}

//To the list of unconfirmed markers
	confirmClick() {
		Actions.adminConfirmMarkers()
	}
	
	render () {
		return (
				<AdminToolsComponent
						onRadiusChange={(radius) => this.handleRadius(radius)}
						onConfirmClick={() => this.confirmClick()}
						radius={this.props.radius*1000}
				/>
		)
	}
}

AdminToolsContainer.propTypes = {
	updateRadius: PropTypes.func,
	radius: PropTypes.number
}

const mapStateToProps = (state) => {
	return {
		radius: state.map.radius
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateRadius: (radius) => {dispatch(ReduxActions.updateRadius(radius))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminToolsContainer)
