import { StyleSheet, Dimensions } from 'react-native'

const windowDim = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,                            // Take up the whole screen
    justifyContent: 'flex-end',         // Arrange button at the bottom
    alignItems: 'center',               // Center button horizontally
  },
  map: {
    width: windowDim.width,
    height: windowDim.height
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 12,
    width: 160,
  },
  callout: {
    width: 140,
  },
});
