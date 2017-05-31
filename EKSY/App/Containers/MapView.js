import React, {Component} from 'react'
import { Container, Content, Button, Icon } from 'native-base'
import Map from './Map'
import PostOffice from '../lib/PostOffice'
import Styles from './Styles/MapViewStyles'
import MenuButton from '../Components/MenuButton'

class MapView extends Component {

  constructor(props) {
    super(props);
    this.po = new PostOffice();
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
