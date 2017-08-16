import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {frontgroundColor} from '../../Theme'

const Card = (props) => (
  <View {...props} style={[styles.container, props.style]}>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
	  backgroundColor: frontgroundColor,
    borderWidth:1,
    borderRadius: 2,
    borderColor:'#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
	  shadowOffset: {width: 0, height: 2},
	  shadowOpacity: 0.1,
	  shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginTop: 10,
  },
});
