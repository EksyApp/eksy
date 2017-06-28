import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

export default class MarkerCard extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Card>
      <CardSection>
      <Text>{this.props.marker.title}</Text>
      </CardSection>

      <CardSection>
      <Text>{this.props.marker.text}</Text>
      </CardSection>

      <CardSection>
      
      </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
