import React, {Component} from 'react'
import SideBarContainer from './SideBarContainer'
import {DefaultRenderer} from 'react-native-router-flux'
import * as Actions from '../../Actions/index'
import {SideMenu} from 'react-native-elements'
import {connect} from 'react-redux'

class NavigationDrawer extends Component {

	render() {
		const children = this.props.navigationState.children
		console.log(this)
		return (
				<SideMenu
						isOpen={this.props.drawerOpen}
						menu={<SideBarContainer />}
						onChange={(isOpen) => {!isOpen ? this.props.drawerClose() : null}}
						disableGestures={this.props.disableGestures}
				>
					<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate}/>
				</SideMenu>
		)
	}

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
