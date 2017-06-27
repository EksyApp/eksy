import React, {Component} from 'react'
import {Router, Scene, Actions} from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import MapContainer from '../Containers/MapContainer'
import LoginScreen from '../Containers/LoginScreen'
import AddMarker from '../Containers/AddMarker'
import MarkerView from '../Containers/MarkerView'

const scenes = Actions.create(
  <Scene key="drawer" component={NavigationDrawer} open={false} >
    <Scene key="root" hideNavBar = {true} >
      <Scene key="login" component={LoginScreen} title="Login"/>
      <Scene key="addMarker" component={AddMarker} title="Add a new marker"/>
      <Scene key="mapContainer" component={MapContainer} title="Map" initial={true}/>
      <Scene key="markerView" component={MarkerView} title="Marker" />
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
