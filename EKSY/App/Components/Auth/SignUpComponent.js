import React, {Component} from 'react'
import {View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import * as Theme from "../../Theme";
import Input from "../Common/Input";
import Message from "../Common/Message";
import Button from "../Common/Button";

export default class SignUpComponent extends Component {
	
	render() {
		return (
				<View style={styles.container}>
					<Header title="Sign up" backButton/>
					<View>
						<Input
								label='Email'
								onChangeText={(email) => this.props.onEmailChange(email)}
								placeholder='Email'
								keyboardType="email-address"
								returnKeyType="next"
								autofocus
						/>
					</View>
					<View>
						<Input
								label='Password'
								onChangeText={password => this.props.onPasswordChange(password)}
								placeholder='Password'
								secureTextEntry
								autoCorrect={false}
								onSubmitEditing={() => {
									this.props.onSignupClick()
								}}
						/>
					</View>
					<View style={styles.response}>
						<Message>{this.props.response}</Message>
					</View>
					<View style={styles.section}>
						<Button onPress={() => this.props.onSignupClick()}>
							Sign up
						</Button>
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
	
	section: {
		marginTop: 20
	},
	
	responseText: {
		textAlign: 'center',
		width: '100%',
		fontSize: 18,
		color: Theme.fontColor
	},
	
	response: {
		marginTop: 20
	}
	
})