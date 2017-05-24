import React, {Component} from 'react'
import { Container, Content, Button, Icon } from 'native-base'
import Map from './Map'
import PostOffice from '../lib/PostOffice'

class MapView extends Component {

  constructor(props) {
    super(props);
    this.po = new PostOffice();
  }

  render() {
    return (
      <Container>
        <Content>
          <Button transparent onPress={() => {
            this.po.getPacket("drawer").open = true;
            this.po.sendPacket("drawer");
          }}>
            <Icon name="menu" />
          </Button>
          <Map />
        </Content>
      </Container>
    )
  }
}

export default MapView
