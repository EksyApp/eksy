import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {detailColor} from '../../Theme'

export const CardSection = (props) => (
    <View {...props} style={[styles.container, props.style]}>
    </View>
);

export default CardSection;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: detailColor,
    position: 'relative',
  },
});
