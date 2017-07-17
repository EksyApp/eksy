import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Modal, TouchableHighlight} from 'react-native'
import { Header, Divider, Label, TextArea } from "../Components/Common";
import PictureList from '../Components/PictureList'
import * as ReduxActions from '../Actions'
import {connect} from 'react-redux'
import * as Theme from '../Theme'

export class MarkerViewModal extends Component {

	_renderImages() {
		if(this.props.marker.images && this.props.marker.images.length > 0) {
			return(
					<View>
						<Divider />
						<Label>Images</Label>
						<PictureList data={this.props.marker.images} listStyle={style.listStyle} imageContainerStyle={style.imageContainer} />
					</View>
			)
		} else {
			return null
		}
	}

	render() {
    if (!this.props.marker) {
      console.log("not")
      return (
        <View pointerEvents="none"></View>
      )
    }

    console.log("jee")
		return(
				<View style={style.container}>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.props.marker !== null}
            onRequestClose={() => this.props.unsetMarkerSelected()}
          >
            <TouchableHighlight onPress={this.props.unsetMarkerSelected()}>
              <Text>Close</Text>
            </TouchableHighlight>
  					<ScrollView>
  						<View>
  							<TextArea>
  								{this.props.marker.text}
  							</TextArea>
  						</View>

  						{this._renderImages()}

  					</ScrollView>
          </Modal>
				</View>
		)
	}

}

const style = StyleSheet.create({
	imageContainer: {
		width: '100%',
	},

	listStyle: {
		margin: 10
	},

	container: {
		backgroundColor: Theme.backgroundColor,
		flex: 1
	},

})

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    unsetMarkerSelected: () => {
      dispatch(ReduxActions.setMarkerSelected(null))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerViewModal)
