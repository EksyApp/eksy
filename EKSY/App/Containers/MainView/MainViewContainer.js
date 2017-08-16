import React, {Component} from 'react'
import * as ReduxActions from '../../Actions/index'
import {connect} from 'react-redux'
import MainViewComponent from "../../Components/MainView/MainViewComponent";
import PropTypes from 'prop-types'

export class MainViewContainer extends Component {
	
	render() {
		return (
				<MainViewComponent
						menuButtonPress = {this.props.menuButtonPress}
				/>
		)
	}
}

MainViewContainer.propTypes = {
	menuButtonPress: PropTypes.func
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => {
			dispatch(ReduxActions.drawerOpen())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer)
