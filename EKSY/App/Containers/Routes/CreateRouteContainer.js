import React, {Component} from 'react'
import CreateRouteComponent from '../../Components/Routes/CreateRouteComponent'
import {connect} from 'react-redux'
import Dao from '../../Dao/Dao'
import {MarkerShape} from "../../Utils/PropTypeShapes";

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
	}
	
	render() {
		return(
				<CreateRouteComponent
						
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateRouteContainer)