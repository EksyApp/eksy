import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-native'
import EditRouteComponent from '../../../Components/Routes/RouteManaging/EditRouteComponent'
import Dao from '../../../Dao/Dao'
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types'
import {RegionShape, RouteShape} from "../../../Utils/PropTypeShapes";

//Renders the view for user to edit a route and holds it's logic
//Consists of EditRouteComponent that holds RouteForm and buttons for save and delete
export class EditRouteContainer extends Component {

	constructor(props) {
		super(props)

		this.dao = new Dao()

		this.state = {
			title: this.props.route.title,
			text: this.props.route.text,
			markers: this.props.route.markers ? this.props.route.markers : []
		}
	}


	handleSave() {
		this.props.route.title = this.state.title
		this.props.route.text = this.state.text
		this.props.route.markers = this.state.markers

		this.dao.updateRoute(this.props.route)
		Actions.pop()
	}

	handleDelete() {
		Alert.alert(
				'Delete route',
				'Are you sure you want to delete the route?',
				[
					{text: 'No', onPress: () => {}},
					{text: 'Yes', onPress: () => {
						this.dao.removeRoute(this.props.route)
						Actions.pop()
					}}
				]
		)
	}

	render() {
		return(
				<EditRouteComponent
						currentRegion={this.props.currentRegion}
						initialTitle={this.state.title}
						initialText={this.state.text}
						onTitleChange={(title) => {this.setState({title})}}
						onTextChange={(text) => {this.setState({text})}}
						markers={this.state.markers}
						onMarkerListChange={(markers) => {this.setState({markers})}}
						onSaveClick={() => this.handleSave()}
						onDeleteClick = {() => this.handleDelete()}
				/>
		)
	}
}

EditRouteContainer.propTypes = {
	route: RouteShape,
	currentRegion: RegionShape,
}

const mapStateToProps = (state) => {
	return {
		route: state.routes.routeSelected,
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRouteContainer)
