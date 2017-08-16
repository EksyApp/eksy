import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddToRouteComponent from '../../Components/Routes/AddToRouteComponent'
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'

export class AddToRouteContainer extends Component {
	
	handleCreateClick() {
		Actions.createRoute()
	}
	
	render() {
		return (
				<AddToRouteComponent
						onCreateClick={() => this.handleCreateClick()}
				/>
		)
	}
}

AddToRouteContainer.propTypes = {

}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToRouteContainer)