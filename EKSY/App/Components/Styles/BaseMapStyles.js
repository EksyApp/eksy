import { StyleSheet, Dimensions } from 'react-native'

const windowDim = Dimensions.get('window');

// Enable this if you have app-wide application styles
// import { ApplicationStyles } from '../../Themes/'



export default StyleSheet.create({
  // Merge in the screen styles from application styles
  // ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    // For Android :/
    width: windowDim.width,
    height: windowDim.height
  }
})
