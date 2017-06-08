import React, {Component} from 'react'
import Style from './Styles/SideBarStyles'
import {Image, ScrollView, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SideBarLogo from './SideBarLogo'
import Button from '../Components/Button'
import * as ReduxActions from '../Actions'
import {connect} from 'react-redux'

class SideBar extends Component {

  render() {
    return (
      <View style={styles.menubarStyle}>
        <View style={styles.logoStyle}>
            <SideBarLogo />
        </View>
        <View style={styles.buttonList}>
          <Button onPress={this.props.goToMap}>
            Go to map
          </Button>
          <Button onPress={this.props.goToAddMarker}>
            Add a marker
          </Button>
          <Button onPress={this.props.goToLoginScreen}>
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMap: () => {
      Actions.mapView()
      dispatch(ReduxActions.drawerClose())
    },
    goToAddMarker: () => {
      Actions.addMarker()
      dispatch(ReduxActions.drawerClose())
    },
    goToLoginScreen: () => {
      Actions.login()
      dispatch(ReduxActions.drawerClose())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
