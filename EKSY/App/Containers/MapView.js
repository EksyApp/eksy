import React, {Component} from 'react'
import { Container, Content, Button, Icon } from 'native-base'
import Map from '../Map/Map'
import PostOffice from '../lib/PostOffice'
import Styles from './Styles/MapViewStyles'
import MenuButton from '../Components/MenuButton'
import MapManager from '../Map/MapManager'
import Marker from '../Map/Marker'

class MapView extends Component {

  constructor(props) {
    super(props);
    this.po = new PostOffice();
    new MapManager().addMarker(new Marker(60.185359, 24.951338, 1))
  }

  render() {
    console.log(Styles);
    return (
      <Container style={Styles.container}>
        <Content style={Styles.container}>
          <MenuButton transparent />
          <Map />
        </Content>
      </Container>
    )
  }
}

export default MapView
