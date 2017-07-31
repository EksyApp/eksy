import React, {Component} from 'react'
import {View, Animated} from 'react-native'
import {Badge} from "react-native-elements";
import MarkerCarousel from "./MarkerCarousel";
import Interactable from 'react-native-interactable'
import * as Theme from "../../Theme/Colors";

class BottomSheetComponent extends Component {
	
	constructor (props){
		super(props)
		this._deltaY = new Animated.Value(Screen.height - 100);
	}
	
	render() {
		return (
				<View>
					<Animated.View style={[styles.panelContainer, {
						backgroundColor: 'black',
						opacity: this._deltaY.interpolate({
							inputRange: [0, Screen.height - 100],
							outputRange: [1, 0],
							extrapolateRight: 'clamp'
						})
					}]}
					               pointerEvents="none"/>
					<Interactable.View
							verticalOnly={true}
							snapPoints={[{y: Screen.height - 220}, {y: Screen.height}]}
							boundaries={{top: 300}}
							initialPosition={{y: Screen.height}}
							animatedValueY={this._deltaY}>
						<Animated.View style={styles.panel}>
							<Animated.View style={styles.panelHeader}>
								<Animated.View style={styles.panelHandle}/>
								{this.props.markerList && this.props.markerList.length > 0 &&
								<Badge
										value={this.props.markerList.length}
										containerStyle={styles.badgeContainer}
										textStyle={styles.badgeText}
								/>
								}
							</Animated.View>
							<View style={styles.panelVisible}>
								<MarkerCarousel
										setMarkerSelected={this.props.setMarkerSelected}
										setMarkerViewVisible={this.props.setMarkerViewVisible}
										disableGestures={this.props.disableGestures}
										markerList={this.props.markerList}
										pointerEvents="none"/>
							</View>
						
						</Animated.View>
					</Interactable.View>
				</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	panelContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
	},
	viewContainer: {
		flex: 1,
	},
	panel: {
		width: Screen.width,
		height: Screen.height,
	},
	
	panelVisible: {
		paddingTop: 20,
		width:"100%",
		height: Screen.height,
		backgroundColor: Theme.backgroundColor,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 0},
		shadowRadius: 5,
		shadowOpacity: 0.4
	},
	
	panelHeader: {
		alignItems: 'center',
		position: 'relative',
		height: 20
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: Theme.detailColor,
		top: 30,
		zIndex: 1,
		position: "absolute"
	},
	badgeContainer: {
		backgroundColor: '#800000',
		position: 'relative',
		top: 22,
		left: 50
	},
	badgeText: {
		color: '#FFFFFF'
	}
})

export default BottomSheetComponent