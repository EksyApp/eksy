import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import * as Theme from "../../Theme";
import Message from '../Common/Message'
import MarkerCardList from '../Common/MarkerCardList'
import Label from "../Common/Label";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Divider from "../Common/Divider";


export default class AdminToolsComponent extends Component {
	

	render () {
		return (
				<View style={styles.container}>
					<Header title='Admin Tools' backButton />
					<Label>Map circle radius</Label>
					<Input
							label='Radius (meters)'
							onChangeText={(radius) => this.props.onRadiusChange(radius)}
							placeholder='Radius'
							keyboardType="numeric"
							defaultValue={this.props.radius + ""}
					/>
					<Divider/>
					<Label>Confirm markers</Label>
					<Button onPress={this.props.onConfirmClick}>
						See unconfirmed markers
					</Button>
				</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
	},
	
	card: {
		width: '95%',
		alignSelf: 'center'
	}
})
