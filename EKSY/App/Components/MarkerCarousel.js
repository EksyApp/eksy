import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MarkerCard from './MarkerCard'

export default class MarkerCarousel extends Component {
  constructor (props) {
    super(props)
    this.itemWidth = 130
    this.sliderWidth = 150
  }

  renderCard () {
    return this.props.markerList.map((marker, index) => {
    <MarkerCard
    marker = {marker}
    key = {index}/>
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Carousel
          itemWidth={this.itemWidth}
          sliderWidth={this.sliderWidth}
          enableSnap={false}
       />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
