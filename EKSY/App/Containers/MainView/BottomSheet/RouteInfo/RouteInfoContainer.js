import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ReduxActions from '../../../../Actions/index'
import RouteInfoComponent from '../../../../Components/MainView/BottomSheet/RouteInfo/RouteInfoComponent'
import {LocationShape, MarkerShape, RouteShape} from '../../../../Utils/PropTypeShapes'

export class RouteInfoContainer extends Component {
	
	constructor(props) {
		super(props)
		
		this.nextMarkerKey = this.props.nextMarker.key
		
		this.state={
			previousMarkers: this.getPreviousMarkers(this.props.route, this.props.nextMarker)
		}
		
		
	}
	
	componentWillReceiveProps(props) {
		if(this.nextMarkerKey !== props.nextMarker.key) {
			this.nextMarkerKey = props.nextMarker.key
			this.setState({previousMarkers: this.getPreviousMarkers(props.route, props.nextMarker)})
		}
	}
	
	getPreviousMarkers(route, nextMarker) {
		let markers = []
		for (let marker of route.markers) {
			if(marker.key !== nextMarker.key) {
				markers.push(marker)
			} else {
				break
			}
		}
		return markers
	}
	
	handleMarkerClick(marker) {
		this.props.setMarkerSelected(marker)
		this.props.setMarkerViewVisible()
		this.props.disableGestures(true)
	}

	render() {
		return(
				<RouteInfoComponent
						previousMarkers={this.state.previousMarkers}
						nextMarker={this.props.nextMarker}
						currentLocation={this.props.currentLocation}
						onMarkerClick={(marker) => this.props.handleMarkerClick(marker)}
				/>
		)
	}
	
	
}

RouteInfoContainer.propTypes = {
	route: RouteShape,
	nextMarker: MarkerShape,
	currentLocation: LocationShape,
}

const mapStateToProps = (state) => {
	return {
		route: state.routes.routeActive.route,
		nextMarker: state.routes.routeActive.nextMarker,
		currentLocation: state.map.location
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkerSelected: (marker) => {
			dispatch(ReduxActions.setMarkerSelected(marker))
		},
		setMarkerViewVisible: () => {
			dispatch(ReduxActions.setMarkerViewVisible())
		},
		disableGestures: (value) => {
			dispatch(ReduxActions.disableGestures(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteInfoContainer)
