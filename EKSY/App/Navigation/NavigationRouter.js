import React, {Component} from 'react'
import {Router, Scene, Actions, Modal} from 'react-native-router-flux'
import * as ReduxActions from '../Actions'

import NavigationDrawer from './NavigationDrawer'
import MapContainer from '../Containers/MapContainer'
import LoginScreen from '../Containers/LoginScreen'
import AddMarker from '../Containers/AddMarker'
import MarkerView from '../Containers/MarkerView'

const scenes = Actions.create(
  <Scene key="drawer" component={NavigationDrawer} open={false} >
    <Scene key="modal" component={Modal} hideNavBar>
      <Scene key="root" hideNavBar = {true} >
        <Scene key="login" component={LoginScreen} title="Login"/>
        <Scene key="addMarker" component={AddMarker} title="Add a new marker"/>
        <Scene key="mapContainer" component={MapContainer} title="Map" initial={true}/>
      </Scene>
      <Scene key="markerView" component={MarkerView} title="Marker" onLeft={Actions.pop} direction="vertical" applyAnimation />
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
