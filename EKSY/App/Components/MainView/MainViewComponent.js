import React, {Component} from 'react'
import MenuButton from '../../Components/Common/MenuButton'
import {View} from 'react-native'
import {connect} from 'react-redux'
import MarkerViewContainer from "../../Containers/MainView/MarkerViewContainer";
import BottomSheetContainer from "../../Containers/MainView/BottomSheetContainer";
import MapContainer from "../../Containers/MainView/MapContainer";


class MainViewComponent extends Component {
	
	render() {
		return (
				<View>
					<MapContainer />
					<View style={styles.panelContainer}>
						<BottomSheetContainer />
						<MarkerViewContainer/>
					</View>
					<MenuButton onPress={() => {this.props.menuButtonPress()}}/>
				</View>
		)
	}
}


const styles = StyleSheet.create({
	panelContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
	}
})

export default MainViewComponent