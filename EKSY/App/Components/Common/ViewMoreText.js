import React, {Component} from 'react'
import {Text, View} from 'react-native'
import TextArea from './TextArea'
import PropTypes from 'prop-types'

export default class ViewMoreText extends Component {
	
	constructor(props) {
		super(props);
		
		this.isTruncated = false;
		this.originalHeight = 0;
		this.shouldShowMore = false;
		this.contentHeight = 0;
		this.isInit = false;
		
		this.state = {
			numberOfLines: null,
			opacity: 0
		}
	}
	
	
	componentDidUpdate(){
		if(this.state.numberOfLines === null){
			(this.props.afterExpand || emptyFunc)();
		} else {
			(this.props.afterCollapse || emptyFunc)();
		}
	}
	
	onLayout(event){
		const {height} = event.nativeEvent.layout;
		
		
		if(height === 0 || this.state.opacity === 1) {
			return false
		}
		
		this.setOriginalHeight(height);
		this.checkTextTruncated(height);
		if(this.state.numberOfLines === this.props.numberOfLines){
			this.setState({
				opacity: 1
			})
		}
	}
	
	setOriginalHeight(height){
		if(this.originalHeight === 0){
			this.originalHeight = height;
			
			if(this.state.numberOfLines !== this.props.numberOfLines) {
				this.setState({
					numberOfLines: this.props.numberOfLines
				})
			}
			
		}
	}
	
	checkTextTruncated(height){
		if(height < this.originalHeight){
			this.shouldShowMore = true;
		}
	}
	
	onPressMore(){
		this.setState({
			numberOfLines: null
		});
	}
	
	onPressLess(){
		this.setState({
			numberOfLines: this.props.numberOfLines
		})
	}
	
	renderViewMore(){
		return (
				<Text onPress={(event) => {this.onPressMore(event)}}>
					View More
				</Text>
		)
	}
	
	renderViewLess(){
		return (
				<Text onPress={(event) => {this.onPressLess(event)}}>
					View Less
				</Text>
		)
	}
	
	renderFooter(){
		let {
			numberOfLines
		} = this.state;
		
		if (this.shouldShowMore === true){
			if(numberOfLines > 0) {
				return (this.props.renderViewMore || this.renderViewMore.bind(this))(this.onPressMore);
			} else {
				return (this.props.renderViewLess || this.renderViewLess.bind(this))(this.onPressLess);
			}
		}
	}
	
	render(){
		
		return (
				<View onLayout={(event) => {this.onLayout(event)}} style={{opacity: this.state.opacity}}>
					
					<TextArea {...this.props} numberOfLines={this.state.numberOfLines} />
					
					{this.renderFooter()}
					
					{this.state.numberOfLines &&
						<View style={{width: 1, height: 1}} />
					}
					
				</View>
		)
	}
}

ViewMoreText.propTypes = {
	renderViewMore: PropTypes.func,
	renderViewLess: PropTypes.func,
	afterCollapse: PropTypes.func,
	afterExpand: PropTypes.func,
	numberOfLines: PropTypes.number.isRequired,
}