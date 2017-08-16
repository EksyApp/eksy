import React, {Component} from 'react'
import SideBar from './SideBarContainer'
import {DefaultRenderer} from 'react-native-router-flux'
import * as Actions from '../../Actions/index'
import {SideMenu} from 'react-native-elements'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class NavigationDrawer extends Component {
	
	render() {
		const children = this.props.navigationState.children
		return (
				<SideMenu
						isOpen={this.props.drawerOpen}
						menu={<SideBar />}
						onChange={(isOpen) => !isOpen ? this.props.drawerClose() : false}
						disableGestures={this.props.disableGestures}
				>
					<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate}/>
				</SideMenu>
		)
	}
	
}

NavigationDrawer.propTypes = {
	navigationState: PropTypes.object,
	drawerClose: PropTypes.func,
	drawerOpen: PropTypes.bool,
	disableGestures: PropTypes.bool,
	onNavigate: PropTypes.bool
}

const mapStateToProps = (state) => {
	return {
		drawerOpen: state.ui.drawer.drawerOpen,
		disableGestures: state.ui.drawer.disableGestures
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		drawerClose: () => {
			dispatch(Actions.drawerClose())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
