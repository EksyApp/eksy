import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import Header from "../Components/Header";
import ImageList from '../Components/ImageList'
import Image from '../Components/Image'
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
							<ImageList data={this.props.marker.images} />
							
						</View>
					</ScrollView>
				</View>
		)
	}
	
}

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
