import React, {Component} from 'react'
import {Router, Scene, Actions} from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import MapView from '../Containers/MapView'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import AddMarker from '../Containers/AddMarker'

const scenes = Actions.create(
  <Scene key="drawer" component={NavigationDrawer} open={false} >
    <Scene key="root" hideNavBar = {true} >
      <Scene key="login" component={LoginScreen} title="Login"/>
      <Scene key="register" component={RegisterScreen} title="Register"/>
      <Scene key="addMarker" component={AddMarker} title="Add a new marker"/>
      <Scene key="mapView" component={MapView} title="Map" initial={true}/>
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
