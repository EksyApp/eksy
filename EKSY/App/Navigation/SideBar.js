import React, {Component} from 'react'
import Style from './Styles/SideBarStyles'
import {Image, ScrollView, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SideBarLogo from './SideBarLogo'
import PostOffice from '../lib/PostOffice'
import Button from '../Components/Button'

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
      <View style={styles.menubarStyle}>
        <View style={styles.logoStyle}>
            <SideBarLogo />
        </View>
        <View style={styles.buttonList}>
          <Button onPress={() => this.goToMap()}>
            Go to map
          </Button>
          <Button onPress={() => this.goToAddMarker()}>
            Add a marker
          </Button>
          <Button onPress={() => this.goToLoginScreen()}>
            Login
          </Button>
        </View>
      </View>
    )
  }
}

const styles = {
  menubarStyle: {
    flex: 1,
    flexDirection: 'column',
    // Placeholder background color
    backgroundColor: '#fff'
  },
  buttonList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  logoStyle: {
    // Three blue lines are from the logo picture
  }
}

export default SideBar
