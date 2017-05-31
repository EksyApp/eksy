import React, {Component} from 'react'
import Styles from './Styles/MenuButtonStyle'
import PostOffice from '../lib/PostOffice'
import {Button, Icon} from 'native-base'

class MenuButton extends Component {

  constructor(props) {
    super(props)

    this.po = new PostOffice();
  }

  render() {
    return(
      <Button transparent={this.props.transparent} onPress={() => {
        this.po.getPacket("drawer").open = true;
        this.po.sendPacket("drawer");
      }} style={Object.assign({}, Styles.buttonStyle, this.props.style)}>
        <Icon name='menu' />
      </Button>
    )
  }

}

export default MenuButton
