import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from "react-native";
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
					<ScrollView>
						<View>
							<Input
									label='Email'
									onChangeText={(email) => this.props.onEmailChange(email)}
									placeholder='Email'
									keyboardType="email-address"
									returnKeyType="next"
							/>
						</View>
						<View>
							<Input
									label='Username'
									onChangeText={(username) => this.props.onUsernameChange(username)}
									placeholder='Username'
									returnKeyType="next"
							/>
						</View>
						<View>
							<Input
									label='Password'
									onChangeText={password => this.props.onPasswordChange(password)}
									placeholder='Password'
									secureTextEntry
									returnKeyType="next"
									autoCorrect={false}
							/>
						</View>
						<View>
							<Input
									label='Confirm Password'
									onChangeText={password => this.props.onConfirmPasswordChange(password)}
									placeholder='Confirm Password'
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
						<View style={[styles.section, styles.bottomMargin]}>
							<Button onPress={() => this.props.onSignupClick()}>
								Sign up
							</Button>
						</View>
					</ScrollView>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
	},
	
	bottomMargin: {
		marginBottom: 30
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
