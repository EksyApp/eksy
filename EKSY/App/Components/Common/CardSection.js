import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const CardSection = (props) => (
    <View {...props} style={[styles.container, props.style]}>
    </View>
);

export { CardSection };

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});
