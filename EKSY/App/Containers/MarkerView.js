import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import Header from "../Components/Header";
import PictureList from '../Components/PictureList'
import * as ReactActions from '../Actions'
import {connect} from 'react-redux'

class MarkerView extends Component {
	
	render() {
		return(
				<View>
					<Header backButton title={this.props.marker.title}/>
					<ScrollView>
						<View>
							<Text>
								{this.props.marker.text}
							</Text>
						</View>
						<View>
							<PictureList data={this.props.marker.images} listStyle={style.listStyle} imageContainerStyle={style.imageContainer} />
							
						</View>
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
	}
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
