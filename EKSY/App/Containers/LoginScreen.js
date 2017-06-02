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
import {Button, Container, Header, Content, Left, Body, Title, Form, Input, Item} from "native-base";
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
          <Container>
            <Header>
              <MenuButton />
              <Left />
              <Body>
                <Title>Login</Title>
              </Body>
            </Header>
            <Content>
              <Form>
                <Item>
                  <Input />
                </Item>
                <Item>
                  <Input />
                </Item>
              </Form>
              <View>
                <Button block>
                  <Text>Login</Text>
                </Button>
                <Button block>
                  <Text>Signup</Text>
                </Button>
              </View>
            </Content>
          </Container>
        );
    }
}


export default LoginScreen
