import React, {Component} from 'react'
import {View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
import {Icon} from 'react-native-elements'
import { Header, Divider, Label, TextArea } from '../Components/Common'
import PictureList from '../Components/PictureList'
import * as ReduxActions from '../Actions'
import {connect} from 'react-redux'
import * as Theme from '../Theme'
import Modal from 'react-native-modal'
import FastImage from 'react-native-fast-image'
import Swiper from 'react-native-swiper'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}

export class MarkerView extends Component {

  constructor (props) {
    super(props)
    this.itemWidth = (0.85 * Screen.width * 2) / 3
    this.sliderWidth = 0.85 * Screen.width
  }

  _renderImage (image) {
    if (image.uri.startsWith('http')) {
      return (
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            source={{uri: image.uri}}
            style={{width: '100%', height: '100%'}}
        />
      )
    } else {
      return (
        <Image
          resizeMode={FastImage.resizeMode.contain}
          source={{uri: image.uri}}
        />

      )
    }
  }

  _renderImages () {
    if (this.props.marker.images && this.props.marker.images.length > 0) {
      return (
        <View style={styles.renderImages}>
        <View style = {styles.labelWrapper}>
          <Divider />
          <Label>Images</Label>
          </View>
          <Swiper
            style={styles.swiper}
            showsButtons={true}
            width={'100%'}
            height={'100%'}
            >
            {this.props.marker.images.map((image, index) => {
              return (
                <View key={`$image.uri$index`}>
                  { this._renderImage(image) }
                </View>)
            })
        }
          </Swiper>
        </View>
      )
    } else {
      return null
    }
  }

  render () {
    // if (!this.props.marker) {
    // 	return null
    // }

    //					onModalHide = {this.props.setMarkerViewHidden}
    //					onBackButtonPress = {this.props.setMarkerViewHidden}
    // react-native-modal:

    return (
      <TouchableWithoutFeedback onPress={this.props.setMarkerViewHidden}>
        <Modal
          isVisible={this.props.markerViewVisible}
          animationIn={'slideInUp'}
          animationOut={'slideInDown'}
          animationInTiming={100}
          animationOutTiming={100}
          backdropColor={'black'}
          backdropOpacity={0.5}
          onModalHide={() => this.props.setMarkerViewHidden}
          >
            <View style={styles.content}>
            <View style={styles.titleAndTextWrapper}>
              <Text style={styles.title}>{this.props.marker.title}</Text>
              <TextArea>
                {this.props.marker.text}
              </TextArea>
              </View>
              {this._renderImages()}
            </View>
        </Modal>
      </TouchableWithoutFeedback>
    )
  }

}

const styles = StyleSheet.create({

  content: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

renderImages: {
  flex:1,
  justifyContent: 'center',
},
  swiper: {
    // width: 300,
    // margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

titleAndTextWrapper: {
  alignItems: 'center',
  margin: 10
},

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Theme.accentColor,
    // textAlign: 'center'
  },


  labelWrapper: {
    padding: 10
  },

  listStyle: {
    margin: 10
  },

  closeButton: {
    position: 'absolute',
    left: Screen.width - 120
  }
})

const mapStateToProps = (state) => {
  return {
    marker: state.markers.markerSelected,
    markerViewVisible: state.ui.markerView.markerViewVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMarkerViewHidden: () => {
      dispatch(ReduxActions.setMarkerViewHidden())
      dispatch(ReduxActions.disableGestures(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerView)
