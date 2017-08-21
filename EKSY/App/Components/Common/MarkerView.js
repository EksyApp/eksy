import React, {Component} from 'react'
import {View, StyleSheet} from "react-native";
import Pointer from "./Pointer";
import Label from "./Label";
import TextArea from "./TextArea";
import PictureSwiper from "./PictureSwiper";
import Message from "./Message";
import PropTypes from 'prop-types';
import {MarkerShape, RegionShape} from "../../Utils/PropTypeShapes";

export default class MarkerView extends Component {
	
	getStatusMessage() {
		switch(this.props.marker.status) {
			case -1:
				return "Rejected"
			case 0:
				return "Waiting for confirmation"
			case 1:
				return "Accepted"
		}
	}
	
	render() {
		return(
				<View>
					<Pointer
							initialRegion={{...this.props.currentRegion, latitude: this.props.marker.latitude, longitude: this.props.marker.longitude}}
							style={styles.map}
					/>
					<Label>{this.props.marker.title}</Label>
					<Message>{this.getStatusMessage()}</Message>
					<TextArea>{this.props.marker.text}</TextArea>
					{this.props.marker.images && <PictureSwiper style={styles.swiper} data={this.props.marker.images}/>}
					{this.props.marker.filters && this.props.marker.filters.map((filter) => <Message>{filter}</Message>)}
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: 300,
		marginBottom: 30
	},
	
	swiper: {
		width: '100%',
		height: 300,
		marginTop: 30
	}
})

MarkerView.propTypes = {
	marker: MarkerShape,
	currentRegion: RegionShape
}