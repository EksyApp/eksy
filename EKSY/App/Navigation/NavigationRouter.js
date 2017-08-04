import React, {Component} from 'react'
import {Router, Scene, Actions} from 'react-native-router-flux'
import NavigationDrawer from '../Containers/SideBar/NavigationDrawer'
import MainViewContainer from '../Containers/MainView/MainViewContainer'
import LoginScreen from '../Containers/Auth/LoginContainer'
import AddMarker from '../Containers/AddMarker/AddMarkerContainer'
import SettingsContainer from '../Containers/Settings/SettingsContainer'
import SignUpContainer from "../Containers/Auth/SignUpContainer";
import EditMarkerContainer from '../Containers/EditMarker/EditMarkerContainer'

// defines all routes in the app
const scenes = Actions.create(
  <Scene key="drawer" component={NavigationDrawer} open={false} >
    <Scene key="root" hideNavBar = {true} >
      <Scene key="login" component={LoginScreen} title="Login"/>
      <Scene key="addMarker" component={AddMarker} title="Add a new marker"/>
      <Scene key="userSettings" component={SettingsContainer} title="User settings"/>
      <Scene key="mainViewContainer" component={MainViewContainer} title="Map" initial={true}/>
      <Scene key="signUp" component={SignUpContainer} title="Sign up"/>
      <Scene key="editMarker" component={EditMarkerContainer} title="Edit marker" />
    </Scene>
  </Scene>
);

// handles routing with scenes
class NavigationRouter extends Component {

  render() {
    return(
      <Router scenes={scenes}/>
    )
  }

}

export default NavigationRouter
