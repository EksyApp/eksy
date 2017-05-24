import React, { Component } from 'react'
import PostOffice from '../lib/PostOffice'
import {Drawer} from 'native-base'
import SideBar from './SideBar'
import {DefaultRenderer} from 'react-native-router-flux'

class NavigationDrawer extends Component {

  constructor(props) {
    super(props)
    this.isOpen = false;
    this.po = new PostOffice();
    this.po.register("drawer", (state) => {this.handleDrawer(state)});
    this.po.getPacket("drawer").open = false;
  }

  openDrawer() {
    this.drawer._root.open()
    this.isOpen = true;
  }

  closeDrawer() {
    this.drawer._root.close();
    this.isOpen = false;
  }

  handleDrawer(state) {
    if (state.open && !this.isOpen) {
      this.openDrawer();
    } else if (!state.open && this.isOpen) {
      this.closeDrawer();
    }
  }

  render() {

      const state = this.props.navigationState;
      const children = state.children;
      return (
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar /*navigator={this.navigator}*/ />}
          onClose={() => {
            this.po.getPacket("drawer").open = false;
            this.po.sendPacket("drawer");
          }}
          >
          <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
        </Drawer>
      );

  }

}

export default NavigationDrawer
