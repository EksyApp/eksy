import React, {Component} from 'react'
import Style from './Styles/SideBarStyles'
// import {Container, Content, Button} from 'native-base'
import {Image, ScrollView, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SideBarLogo from './SideBarLogo'
import PostOffice from '../lib/PostOffice'

class SideBar extends Component {

  constructor(props) {
    super(props)
    this.po = new PostOffice();
  }

  closeDrawer() {
    this.po.getPacket("drawer").open=false;
    this.po.sendPacket("drawer");
  }

  goToLoginScreen() {
    Actions.login();
    this.closeDrawer();
  }

  goToAddMarker() {
    Actions.addMarker();
    this.closeDrawer();
  }

  goToMap() {
    Actions.mapView();
    this.closeDrawer();
  }

  render() {
    return (
      <View><Text>SideBar</Text></View>
    )
  }
}

export default SideBar
