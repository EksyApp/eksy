import React, {Component} from 'react'
import CreateRouteComponent from '../../Components/Routes/CreateRouteComponent'
import {connect} from 'react-redux'

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