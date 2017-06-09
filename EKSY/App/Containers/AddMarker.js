import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
// import {Container, Content, Header, Body, Title, Left, Button} from 'native-base'
import MenuButton from '../Components/MenuButton'
import PointSelector from '../Components/PointSelector'
import Style from './Styles/AddMarkerStyles'
import Marker from '../Map/Marker'
import MapManager from '../Map/MapManager'
import {Actions} from 'react-native-router-flux'
import Header from '../Components/Header'

class AddMarker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      region: null,
      text: ""
    }

    this.mapManager = new MapManager();
  }

  addNewMarker() {
    let latitude = this.state.region.latitude;
    let longitude = this.state.region.longitude;

    Actions.mapView();
    let marker = new Marker(latitude, longitude, 0);
    marker.setIdFromCounter();
    marker.setText(this.state.text);
    this.mapManager.addMarker(marker);
    setTimeout(() => this.mapManager.flyToPosition(latitude, longitude), 1000)
    // this.mapManager.update();
  }

  render() {
    return(
      // <Container>
      //   <Header>
      //
      //     <MenuButton />
      //     <Left />
      //     <Body>
      //       <Title>Add a new marker</Title>
      //     </Body>
      //   </Header>
      //   <Content style={Style.container}>
      //     <PointSelector onChange={(region) => this.state.region = region} style={Style.map} />
      //     <TextInput
      //       onChange={(event) => this.state.text = event.nativeEvent.text}
      //       multiline
      //       numberOfLines={10}
      //       style = {Style.textInput}
      //     />
      //     <Button block onPress={() => this.addNewMarker()} style={Style.button}>
      //       <Text style={Style.text}>Add</Text>
      //     </Button>
      //   </Content>
      //
      // </Container>

      <View>
        <Header title="Add Marker" />
      </View>
    )
  }
}

export default AddMarker
