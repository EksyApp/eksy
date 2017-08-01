import React, {Component} from 'react'
import {Router, Scene, Actions, Modal} from 'react-native-router-flux'
import * as ReduxActions from '../Actions'

import NavigationDrawer from '../Containers/SideBar/NavigationDrawer'
import MainViewContainer from '../Containers/MainView/MainViewContainer'
import LoginScreen from '../Containers/Auth/LoginScreenContainer'
import AddMarker from '../Containers/AddMarker/AddMarkerContainer'
import MarkerView from '../Containers/MainView/MarkerViewContainer'
import UserSettingsScreen from '../Containers/Settings/SettingContainer'

const scenes = Actions.create(
  <Scene key="drawer" component={NavigationDrawer} open={false} >
    <Scene key="root" hideNavBar = {true} >
      <Scene key="login" component={LoginScreen} title="Login"/>
      <Scene key="addMarker" component={AddMarker} title="Add a new marker"/>
      <Scene key="userSettings" component={UserSettingsScreen} title="User settings"/>
      <Scene key="mainViewContainer" component={MainViewContainer} title="Map" initial={true}/>
    </Scene>
  </Scene>
);

class NavigationRouter extends Component {

  render() {
    return(
      <Router scenes={scenes}/>
    )
  }

}

export default NavigationRouter
