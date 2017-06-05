import React, { Component } from 'react'
import {
  Modal,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image
 } from 'react-native'

export default CalloutModal = (props) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent
        visible={props.modalVisible}
        onRequestClose={() => {}}
      >
        <View>
          <TouchableHighlight onPress={props.closeModal}>
            <Text>Sulje</Text>
          </TouchableHighlight>
          <Text style={styles.name}>{props.name}</Text>
          <Image
            style={styles.image}
            source={{ uri: props.image }}
          />
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  // Callout bubble
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5
  },
  // Character image
  image: {
    width: 120,
    height: 80
  }
})
