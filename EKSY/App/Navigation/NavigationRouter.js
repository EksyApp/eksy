import React, {Component} from 'react'
import {Router, Scene, Actions} from 'react-native-router-flux'
import NavigationDrawer from '../Containers/SideBar/NavigationDrawer'
import MainViewContainer from '../Containers/MainView/MainViewContainer'
import LoginScreen from '../Containers/Auth/LoginContainer'
import AddMarker from '../Containers/AddMarker/AddMarkerContainer'
import SettingsContainer from '../Containers/Settings/SettingsContainer'
import SignUpContainer from "../Containers/Auth/SignUpContainer"
import EditMarkerContainer from '../Containers/EditMarker/EditMarkerContainer'
import AdminToolsContainer from '../Containers/Admin/AdminToolsContainer'
import AdminMarkerViewContainer from "../Containers/Admin/AdminMarkerViewContainer";
import ConfirmMarkersContainer from "../Containers/Admin/ConfirmMarkersContainer";
import UserMarkersContainer from "../Containers/Settings/UserMarkersContainer";
import UserMarkerViewContainer from "../Containers/Settings/UserMarkerViewContainer";
import AddToRouteContainer from '../Containers/Routes/AddToRouteContainer'
import CreateRouteContainer from '../Containers/Routes/CreateRouteContainer'
import UserRoutesContainer from '../Containers/Routes/UserRoutesContainer'

// defines all routes in the app
const scenes = Actions.create(
  <Scene key="drawer" component={NavigationDrawer} open={false} >
    <Scene key="root" hideNavBar = {true} >
	    <Scene key="mainViewContainer" component={MainViewContainer} title="Map" initial={true}/>
      <Scene key="login" component={LoginScreen} title="Login"/>
      <Scene key="addMarker" component={AddMarker} title="Add a new marker"/>
      <Scene key="userSettings" component={SettingsContainer} title="User settings"/>
      <Scene key="adminTools" component={AdminToolsContainer} title="Admin"/>
      <Scene key="adminMarkerView" component={AdminMarkerViewContainer} title="Admin Markerview" />
      <Scene key="adminConfirmMarkers" component={ConfirmMarkersContainer} title="Confirm Markers"/>
      <Scene key="signUp" component={SignUpContainer} title="Sign up"/>
      <Scene key="editMarker" component={EditMarkerContainer} title="Edit marker" />
	    <Scene key="usersMarkers" component={UserMarkersContainer} title="Your markers" />
	    <Scene key="userMarkerView" component={UserMarkerViewContainer} title="Your Marker" />
      <Scene key="addToRoute" component={AddToRouteContainer} title="Add to route"/>
      <Scene key="createRoute" component={CreateRouteContainer} title="Create route" />
      <Scene key="userRoutes" component={UserRoutesContainer}/>
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
