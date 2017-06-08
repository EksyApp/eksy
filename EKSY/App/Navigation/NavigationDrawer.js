import React, { Component } from 'react'
import SideBar from './SideBar'
import {DefaultRenderer} from 'react-native-router-flux'
import * as Actions from '../Actions'
import {SideMenu} from 'react-native-elements'
import {connect} from 'react-redux'

class NavigationDrawer extends Component {

  render() {
    const children = this.props.navigationState.children
    return(
      <SideMenu
        isOpen={this.props.drawerOpen}
        menu={<SideBar />}
        onChange={(isOpen) => !isOpen ? this.props.drawerClose() : false}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </SideMenu>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.ui.drawerOpen
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
