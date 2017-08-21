import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import FilterSettingsContainer from "../../Containers/Settings/FilterSettingsContainer";
import * as Theme from "../../Theme";
import ProfileContainer from "../../Containers/Settings/ProfileContainer";
import VersionNumber from "react-native-version-number"

export default class SettingsComponent extends Component {

	render () {
		return (
				<View style={styles.container}>
					<Header title='Filter Settings' backButton />
					<ProfileContainer/>
					<FilterSettingsContainer/>
					<View style={styles.versionView}>
						<Text style={styles.versionText}>{VersionNumber.appVersion}</Text>
					</View>
				</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
	},
	versionView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		margin: 15
	},
	versionText: {
		fontSize: 12
	}
})
