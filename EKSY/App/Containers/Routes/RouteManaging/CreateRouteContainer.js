import React, {Component} from 'react'
import CreateRouteComponent from '../../../Components/Routes/RouteManaging/CreateRouteComponent'
import {connect} from 'react-redux'
import Dao from '../../../Dao/Dao'
import {MarkerShape, RegionShape} from "../../../Utils/PropTypeShapes";
import {Actions} from 'react-native-router-flux'

//Renders the view for user to create a new route and holds it's logic
//Consists of RouteForm and create button
export class CreateRouteContainer extends Component {

	constructor(props) {
		super(props)

		this.state={
			title: "",
			text: "",
			markers: [this.props.marker]
		}
	}

	createRoute() {
		let route = {
			title: this.state.title,
			text: this.state.text,
			markers: this.state.markers
		}
		new Dao().addNewRoute(route)
		Actions.pop()
	}

	render() {
		return(
				<CreateRouteComponent
						currentRegion={this.props.currentRegion}

						onTitleChange={(title) => this.setState({title})}

						onTextChange={(text) => this.setState({text})}

						markers={this.state.markers}
						onMarkerListChange={(markers) => this.setState({markers})}

						onCreateClick = {() => this.createRoute()}
				/>
		)
	}


}

CreateRouteContainer.propTypes = {
	marker: MarkerShape,
	currentRegion: RegionShape
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRouteContainer)
