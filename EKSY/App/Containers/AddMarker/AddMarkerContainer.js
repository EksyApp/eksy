import React, {Component} from 'react'
import {Keyboard, Image} from 'react-native'
import MapManager from '../../Utils/MapManager'
import * as ReduxActions from '../../Actions/index'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import Dao from '../../Dao/Dao'
import ImagePicker from 'react-native-image-picker'
import Filters from '../../Data/Filters'
import AddMarkerComponent from "../../Components/AddMarker/AddMarkerComponent";

export class AddMarkerContainer extends Component {
	constructor(props) {
		super(props)

		this._urlField = null;
		this.dao = new Dao();
		this.filters = [...Filters.mainFilters];

		this.state = {
			text: '',
			title: '',
			uri: '',
			images: [],
			imageResponse: "",
			filters: []
		}
		
		for (let filter of this.filters) {
			filter.checked = false
		}

		console.log(this)
		this.mapManager = new MapManager()
	}

	addNewMarker() {
		let marker = {
			latitude: this.props.currentRegion.latitude,
			longitude: this.props.currentRegion.longitude,
			text: this.state.text,
			title: this.state.title,
			images: this.state.images,
			filters: this.state.filters
		}
		this.props.addNewMarker(marker);
		Keyboard.dismiss()
		setTimeout(() => this.mapManager.flyToPosition(marker.latitude, marker.longitude), 1000)
		Actions.pop()
	}

	_addImage() {
		const imageUri = this.state.uri
		Image.getSize(imageUri, (width, height) => {this._imageUriWorks(imageUri, width, height)}, (error) => {this._imageUrlError(error)})
	}

	_selectImage () {
    const options = {
      title: 'Select image',
			noData: true,
      storageOptions: {
        skipBackup: true,
      },
			maxWidth: 800,
			maxHeight: 800
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('response: ', response)

      if (response.didCancel) {
        console.log('cancelled')
      } else if (response.error) {
        console.log('error ', response.error)
      } else {
        this.setState({ uri: response.uri })
        this._addImage()
      }
    })
  }

	_imageUrlError(error) {
		this.setState({imageResponse: "URL not valid"});
	}

	_imageUriWorks(imageUri, width, height) {
		this.setState({
			images: [...this.state.images, {uri: imageUri, width: width, height: height}],
			uri: '',
			imageResponse: "Image added!"
		});
	}

	//
	handleCheckBoxListPress(name, checked) {
		if (checked) {
			this.setState({filters: [...this.state.filters, name]})
		} else {
			this.setState({filters: this.state.filters.filter((filter) => name !== filter)})
		}
	}
	

	render() {
		return (
				<AddMarkerComponent
					images={this.state.images}
					regionChange={this.props.regionChange}
					currentRegion={this.props.currentRegion}
					onTitleChange={(text) => {this.setState({title: text})}}
					onTextChange={(text) => {this.setState({text: text})}}
					imageResponse={this.state.imageResponse}
					addImageButtonClick={() => {this._selectImage()}}
					filters={this.filters}
					handleCheckBoxListPress={(name, checked) => {this.handleCheckBoxListPress(name, checked)}}
					addNewMarkerButtonClick={() => {this.addNewMarker()}}
				/>
		)
	}



}



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

export default connect(mapStateToProps, mapDispatchToProps)(AddMarkerContainer)
