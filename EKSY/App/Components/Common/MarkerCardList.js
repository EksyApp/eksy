import React, {Component} from 'react'
import {ListView, Dimensions} from 'react-native'
import MarkerCard from '../MainView/BottomSheet/MarkerCard'
import PropTypes from 'prop-types';
import {MarkersShape} from "../../Utils/PropTypeShapes";

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

export default class MarkerCardList extends Component {

  constructor(props) {
		super(props)

		const datasource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})

		this.state = {
			dataSource: datasource.cloneWithRows(this.props.data)
		}

	}

  componentWillReceiveProps(props) {
		if(props.data !== this.props.data) {
			const dataSource = this.state.dataSource.cloneWithRows(props.data || []);
			this.setState({dataSource})
		}
	}

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow = {(marker) => {
          return(
            <MarkerCard
            width={Screen.width-10}
            marker={marker}
            onPress={this.props.onPress}
            style={this.props.style}
          />
        )
        }}
        enableEmptySections={true}
      />

    )
  }
}

MarkerCardList.PropTypes = {
	data: MarkersShape,
	onPress: PropTypes.func,
	style: PropTypes.object
}