import React, {Component} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import {Button, Header} from '../Common'
import * as Theme from '../../Theme/'
import Input from '../Common/Input'
import Message from '../Common/Message'
import {Actions} from 'react-native-router-flux'
import {CheckBox} from '../Common/CheckBox'
import PropTypes from 'prop-types'
import Container from '../Common/Container'

class LoginComponent extends Component {
	
	render() {
		return (
				<Container title='Login' backButton>
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
								label='Password'
								onChangeText={password => this.props.onPasswordChange(password)}
								placeholder='Password'
								secureTextEntry
								autoCorrect={false}
								onSubmitEditing={() => {
									this.props.onLoginClick()
								}}
						/>
					</View>
					<View style={styles.section}>
						<Message>{this.props.response}</Message>
					</View>
					<View style={styles.section}>
						<Button onPress={() => this.props.onLoginClick()}>
							Log in
						</Button>
					</View>
					<View style={[styles.section, styles.bottomMargin]}>
						<Message>Not signed up yet?</Message>
						<Button onPress={() => Actions.signUp()}>
							Sign up
						</Button>
					</View>
				</Container>
		
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
	
})


LoginComponent.propTypes = {
	onPasswordChange: PropTypes.func,
	onEmailChange: PropTypes.func,
	onLoginClick: PropTypes.func,
	response: PropTypes.string,
}

export default LoginComponent
