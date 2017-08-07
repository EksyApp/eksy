import React, {Component} from 'react'
import {View, StyleSheet} from "react-native";
import Picture from "../Common/Picture";

class SideBarLogo extends Component {
	
	constructor(props) {
		super(props)
		
		this.data = {
			width: 185,
			height: 54,
			uri: ""
		}
	}
	
	render() {
		return (
				<Picture source={require("../../Images/logoPlaceHolder.png")} data={this.data} containerStyle={styles.view}/>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		width: '100%',
		marginBottom: 20
	}
})

export default SideBarLogo
