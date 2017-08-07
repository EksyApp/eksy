import React, {Component} from 'react'
import {View, StyleSheet, Keyboard, ScrollView, Image} from 'react-native'
import PointSelector from '../Components/PointSelector'
import MapManager from '../Map/MapManager'
import Header from '../Components/Header'
import * as ReduxActions from '../Actions'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import * as Theme from '../Theme'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Label from '../Components/Label'
import TextInputArea from '../Components/TextInputArea'
import Dao from '../Dao/Dao'


export class AddMarker extends Component {
	constructor(props) {
		super(props)

		this._urlField = null;
		this.dao = new Dao();

		this.state = {
			text: '',
			title: '',
			uri: '',
			images: [],
			imageResponse: ""
		}

		this.mapManager = new MapManager()
	}

	addNewMarker() {
		let marker = {
			latitude: this.props.currentRegion.latitude,
			longitude: this.props.currentRegion.longitude,
			text: this.state.text,
			title: this.state.title,
			images: this.state.images,
			
		}
		this.props.addNewMarker(marker);
		Keyboard.dismiss()
		setTimeout(() => this.mapManager.flyToPosition(marker.latitude, marker.longitude), 1000)
		Actions.pop()
	}
	
	_addImage() {
		Image.getSize(this.state.uri, (width, height) => {this._imageUriWorks(width, height)}, (error) => {this._imageUrlError(error)})
	}

	_imageUrlError(error) {
		this.setState({imageResponse: "URL not valid"});
	}

	_imageUriWorks(width, height) {
		this.setState({images: [...this.state.images, {uri: this.state.uri, width: width, height: height}]});
		this.setState({uri:'', imageResponse: "FastImage added!"})
	}

	render() {
		return (
				<View style={styles.container}>
					<Header title='Add Marker' backButton/>
					<View style={styles.container}>
						<View style={styles.mapContainer}>
							<PointSelector onChange={(region) => {
								this.props.regionChange(region)
							}} currentRegion={this.props.currentRegion} style={styles.map}/>
						</View>
						<ScrollView>
							<View style={styles.formContainer}>
								<Input label="Title" onChangeText={(text) => this.setState({title: text})}/>
								<TextInputArea label="Text" onChangeText={(text) => this.setState({text: text})}/>
								<Input value={this.state.uri} label="Image URL" onChangeText={(text) => this.setState({uri: text})}/>
								<Label>{this.state.imageResponse}</Label>
								<Button onPress={() => this._addImage()}>
									Add image
								</Button>

							</View>
							<View style={styles.buttonContainer}>

								<Button onPress={() => {
									this.addNewMarker()
								}}>
									Add marker
								</Button>
							</View>
						</ScrollView>

					</View>
				</View>
		)
	}



}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.backgroundColor,
		flex: 1
	},

	mapContainer: {
		height: '50%',
		width: '100%'
	},

	buttonContainer: {
		marginTop: 10,
		marginBottom:20
	},

	map: {
		...StyleSheet.absoluteFillObject
	},

	textArea: {
		flex: 1,
		textAlignVertical: 'top',
		width: '100%',
		backgroundColor: Theme.frontgroundColor,
		marginTop: 20
	},


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
		},
		addNewMarker: (marker) => {
			dispatch(ReduxActions.addNewMarker(marker))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker)