import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
// import {Container, Content, Header, Body, Title, Left, Button} from 'native-base'
import MenuButton from '../Components/MenuButton'
import PointSelector from '../Components/PointSelector'
import Style from './Styles/AddMarkerStyles'
import Marker from '../Map/Marker'
import MapManager from '../Map/MapManager'
import Header from '../Components/Header'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import {BackgroundColor} from '../Theme'
import {Grid, Row, FormInput} from 'react-native-elements'

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

      <View style={styles.container}>
        <Header title="Add Marker" menuButtonPress={this.props.menuButtonPress} />
        <Grid>
          <Row size={2}>
            <PointSelector onChange={this.props.regionChange} initialRegion={this.props.initialRegion} style={styles.map} />
          </Row>
          <Row size={2}>
            <FormInput onChangeText={(text) => this.setState({text: text})} multiline numberOfLines={8} style={styles.textArea} />
          </Row>
          <Row size={1}>

          </Row>
        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColor,
    flex: 1
  },

  map: {
    flex: 1,
  },

  textArea: {
    flex:1,
    textAlignVertical: 'top',
    width: '100%'
  }


})

const mapStateToProps = (state) => {
  return {
    initialRegion: state.map.currentRegion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuButtonPress: () => {dispatch(Actions.drawerOpen())},
    regionChange: (region) => {dispatch(Actions.updateRegion(region))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker)
