/**
 * @class Login
 */

import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    dismissKeyboard,
    TouchableWithoutFeedback
} from "react-native";

import MenuButton from '../Components/MenuButton'
import React, {Component} from "react";
import * as firebase from "firebase";
import {Button} from "native-base";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Sae} from "react-native-textinput-effects";
import DismissKeyboard from "dismissKeyboard";

import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    async signup() {

        DismissKeyboard();

        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "account created"
            });

            setTimeout(() => {
                // this.props.navigator.push({
                //     name: "Home"
                // })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    async login() {

        DismissKeyboard();

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "Logged In!"
            });

            setTimeout(() => {
                // this.props.navigator.push({
                //     name: "Home"
                // })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    render() {

        return (

            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <View style={styles.container}>
                  <MenuButton />
                    <View style={styles.formGroup}>
                        <Text style={styles.title}>Login</Text>
                        <Sae
                            label={"Email Address"}
                            iconClass={FontAwesomeIcon}
                            iconName={"pencil"}
                            iconColor={"black"}
                            onChangeText={(email) => this.setState({email})}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            inputStyle={styles.inputStyle}
                        />
                        <Sae
                            label={"Password"}
                            iconClass={FontAwesomeIcon}
                            iconName={"key"}
                            iconColor={"black"}
                            onChangeText={(password) => this.setState({password})}
                            password={true}
                            autoCapitalize="none"
                            inputStyle={styles.inputStyle}
                        />

                        <View style={styles.submit}>
                            <Button onPress={this.signup} style={styles.buttons} textStyle={{fontSize: 18}}>
                                <Text>Sign up</Text>
                            </Button>
                            <Button onPress={this.login} style={styles.buttons} textStyle={{fontSize: 18}}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.response}>{this.state.response}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


export default LoginScreen
