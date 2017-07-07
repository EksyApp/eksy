import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import * as Theme from '../../Theme'

export const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View>
      <FormLabel labelStyle={styles.labelStyle}>{label}</FormLabel>
      <FormInput
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid='transparent'
      autoCorrect={false}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      inputStyle={styles.inputStyle}
      containerStyle={styles.containerStyle}
      />
    </View>
    );
};

export default Input;

const styles = StyleSheet.create({
  containerStyle: {
  backgroundColor: Theme.frontgroundColor,
  margin: 10
  },
  inputStyle:{
    fontSize: 18,
    color: Theme.fontColor,
  },
  labelStyle: {
    fontSize: 20,
    color: Theme.accentColor
  }
});
