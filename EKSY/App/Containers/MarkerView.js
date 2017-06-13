import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import Header from "../Components/Header";
import ImageList from '../Components/ImageList'
import Image from '../Components/Image'

class MarkerView extends Component {
	
	render() {
		return(
				<View>
					<Header menuButtonPress="this.props.menuButtonPress" title={this.props.title}/>
					<ScrollView>
						<View>
							<Text>
								{this.props.text}
							</Text>
						</View>
						<View>
							<ImageList>
								{this.props.images.map(image) => <Image uri={image.uri}/>}
							</ImageList>
						</View>
					</ScrollView>
				</View>
		)
	}
	
}

