import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
// import {Container, Content, Header, Body, Title, Left, Button} from 'native-base'
import PointSelector from '../Components/PointSelector'
import Marker from '../Map/Marker'
import MapManager from '../Map/MapManager'
import Header from '../Components/Header'
import * as ReduxActions from '../Actions'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {backgroundColor, frontgroundColor} from '../Theme'
import {Grid, Row, FormInput, Button} from 'react-native-elements'
import ActionButton from '../Components/ActionButton'

class AddMarker extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			text: ""
		}
		
		this.mapManager = new MapManager();
	}
	
	addNewMarker() {
		let latitude = this.props.currentRegion.latitude;
		let longitude = this.props.currentRegion.longitude;
		let marker = <Marker latitude={latitude} longitude={longitude} text={this.state.text}/>;
		this.mapManager.addMarker(marker);
		setTimeout(() => this.mapManager.flyToPosition(latitude, longitude), 1000)
		Actions.mapView();
		// this.mapManager.update();
	}
	
	
	render() {
		return (
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
					<Header title="Add Marker" menuButtonPress={this.props.menuButtonPress}/>
					<Grid>
						<Row size={2} containerStyle={styles.row}>
							<PointSelector onChange={(region) => {
								this.props.regionChange(region)
							}} currentRegion={this.props.currentRegion} style={styles.map}/>
						</Row>
						<Row size={2} containerStyle={styles.row}>
							<FormInput onChangeText={(text) => this.setState({text: text})} multiline numberOfLines={8} style={styles.textArea}/>
						</Row>
						<Row size={1} containerStyle={styles.row}>
							<ActionButton title="Add" onPress={() => {
								this.addNewMarker()
							}}/>
						</Row>
					</Grid>
				</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: backgroundColor,
		flex: 1
	},
	
	row: {
		width: '100%'
	},
	
	map: {
		flex: 1,
	},
	
	textArea: {
		flex: 1,
		textAlignVertical: 'top',
		width: '100%',
		backgroundColor: frontgroundColor,
		marginTop: 10
	}
	
	
})

const mapStateToProps = (state) => {
	return {
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		menuButtonPress: () => {
			dispatch(ReduxActions.drawerOpen())
		},
		regionChange: (region) => {
			dispatch(ReduxActions.updateRegion(region))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker)
