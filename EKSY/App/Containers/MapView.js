import React, {Component} from 'react'
import { Container, Content, Button, Icon } from 'native-base'
import Map from './Map'
import PostOffice from '../lib/PostOffice'
import Styles from './Styles/MapViewStyles'

class MapView extends Component {

  constructor(props) {
    super(props);
    this.po = new PostOffice();
  }

  render() {
    console.log(Styles);
    return (
      <Container>
        <Content>
          <Button transparent onPress={() => {
            this.po.getPacket("drawer").open = true;
            this.po.sendPacket("drawer");
          }} style={Styles.buttonStyle}>
            <Icon name='menu' />
          </Button>
          <Map />
        </Content>
      </Container>
    )
  }
}

export default MapView
