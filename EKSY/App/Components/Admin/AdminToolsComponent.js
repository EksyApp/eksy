import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import * as Theme from "../../Theme";


export default class AdminToolsComponent extends Component {

	render () {
		return (
				<View style={styles.container}>
					<Header title='Admin Tools' backButton />
				</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
	}
})
