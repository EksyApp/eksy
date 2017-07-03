import React, {Component} from 'react'
import {connect} from 'react-redux'
import Marker from './Marker'

class MarkerList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.markerList)
    let ret = this.props.markerList.map((marker, index) => <Marker data={marker} key={marker.key} /> )
    console.log('markerlist' + ret)
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    markerList: state.markers.markerList
  }
}

export default connect(mapStateToProps)(MarkerList)
