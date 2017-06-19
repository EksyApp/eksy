import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import Header from "../Components/Header";
import PictureList from '../Components/PictureList'
import * as ReactActions from '../Actions'
import {connect} from 'react-redux'
import TextArea from '../Components/TextArea'
import * as Theme from '../Theme'
import Divider from '../Components/Divider'
import Label from '../Components/Label'

export class MarkerView extends Component {

	_renderImages() {
		if(this.props.marker.images.length > 0) {
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
		return(
				<View style={style.container}>
					<Header backButton title={this.props.marker.title}/>
					<ScrollView>
						<View>
							<TextArea>
								{this.props.marker.text}
							</TextArea>
						</View>

						{this._renderImages()}

					</ScrollView>
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
		marker: state.map.selectedMarker.marker
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerView)
