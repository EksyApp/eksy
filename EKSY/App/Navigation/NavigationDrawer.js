import React, { Component } from 'react'
import SideBar from './SideBar'
import {DefaultRenderer} from 'react-native-router-flux'
import {drawerToggle} from '../Actions'
import {SideMenu} from 'react-native-elements'
import {connect} from 'react-redux'

class NavigationDrawer extends Component {

  render() {
    const children = this.props.navigationState.children
    return(
      <SideMenu
        isOpen={this.props.drawerOpen}
        menu={SideBar}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </SideMenu>
    )
  }

}

const mapStateToProps = (state) => {
  return {drawerOpen: state.ui.drawerOpen}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
