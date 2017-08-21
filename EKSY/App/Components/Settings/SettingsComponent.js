import React, {Component} from 'react'
import { View, StyleSheet } from "react-native";
import Header from "../Common/Header";
import FilterSettingsContainer from "../../Containers/Settings/FilterSettingsContainer";
import * as Theme from "../../Theme";
import ProfileContainer from "../../Containers/Settings/ProfileContainer";
import Container from '../Common/Container'


export default class SettingsComponent extends Component {
	
	render () {
		return (
				<Container title='Settings' backButton>
					<ProfileContainer/>
					<FilterSettingsContainer/>
				</Container>
		)
	}
	
}
