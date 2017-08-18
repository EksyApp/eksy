import React, {Component} from 'react'
import { View, StyleSheet } from "react-native";
import Header from "../Common/Header";
import FilterSettingsContainer from "../../Containers/Settings/FilterSettingsContainer";
import * as Theme from "../../Theme";
import ProfileContainer from "../../Containers/Settings/ProfileContainer";


export default class SettingsComponent extends Component {
	
	render () {
		return (
				<View style={styles.container}>
					<Header title='Settings' backButton />
					<ProfileContainer/>
					<FilterSettingsContainer/>
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