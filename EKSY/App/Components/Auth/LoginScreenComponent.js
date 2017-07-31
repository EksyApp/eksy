import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import {Button, Header, Input} from "../Common";
import * as Theme from "../../Theme/";

class LoginScreenComponent extends Component {
	
	render() {
		return (
				<View style={styles.container}>
					<Header title='Login/Signup' backButton />
					<View>
						<Input
								label='Email'
								onChangeText={(email) => this.props.onEmailChange(email)}
								placeholder='user@gmail.com'
						/>
					</View>
					<View>
						<Input
								label='Password'
								onChangeText={password => this.props.onPasswordChange(password)}
								placeholder='your password'
								secureTextEntry
						/>
					</View>
					<View style={styles.buttons}>
						<Button onPress={() => this.props.onLoginClick()}>
							Log in
						</Button>
						<Button onPress={() => this.props.onSignupClick()}>
							Sign up
						</Button>
					</View>
					<View style={styles.response}>
						<Text style={styles.responseText}>{this.props.response}</Text>
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
	
	buttons: {
		marginTop: 50
	},
	
	responseText: {
		textAlign: 'center',
		width: '100%',
		fontSize: 18,
		color: 'white'
	},
	
	response: {
		marginTop: 50
	}
	
})

export default LoginScreenComponent