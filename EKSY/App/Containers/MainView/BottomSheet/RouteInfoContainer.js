import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ReduxActions from '../../../Actions'
import RouteInfoComponent from '../../../Components/MainView/BottomSheet/RouteInfoComponent'
import {RouteShape} from '../../../Utils/PropTypeShapes'

export class RouteInfoContainer extends Component {

	render() {
		return(
				<RouteInfoComponent
						route={this.props.route}
				/>
		)
	}

}

RouteInfoContainer.propTypes = {
	route: RouteShape
}

const mapStateToProps = (state) => {
	return {
		route: state.routes.routeActive.route
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteInfoContainer)
