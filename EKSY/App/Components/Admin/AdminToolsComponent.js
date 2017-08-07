import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Header from "../Common/Header";
import * as Theme from "../../Theme";
import Message from '../Common/Message'
import MarkerCardList from '../Common/MarkerCardList'


export default class AdminToolsComponent extends Component {


  handlePress(marker) {

  }

  renderList() {
    if(this.props.loading) {
      return(<Message>Loading</Message>)
    } else {
      return(<MarkerCardList data={this.props.pendingMarkers} onPress={(marker) => {this.handlePress(marker)}} />)
    }
  }

	render () {
		return (
				<View style={styles.container}>
					<Header title='Admin Tools' backButton />
          {this.renderList()}
				</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
	}
})
