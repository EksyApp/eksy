import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import {Container, Content, Header, Body, Title, Left, Button} from 'native-base'
import MenuButton from '../Components/MenuButton'
import PointSelector from '../Components/PointSelector'
import Style from './Styles/AddMarkerStyles'

class AddMarker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      point: null,
      text: ""
    }
  }

  render() {
    return(
      <Container>
        <Header>

          <MenuButton />
          <Left />
          <Body>
            <Title>Add a new marker</Title>
          </Body>
        </Header>
        <Content style={Style.container}>
          <PointSelector onChange={(point) => this.state.point = point} style={Style.map} />
          <TextInput onEndEditing={(event) => this.state.text = event.nativeEvent.text} />
          <Button>
            <Text>Add</Text>
          </Button>
        </Content>

      </Container>
    )
  }
}

export default AddMarker
