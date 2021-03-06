import React, {Component} from 'react'
import FastImage from "react-native-fast-image";
const OrgImage = require('react-native').Image
import PropTypes from 'prop-types';

export default class Image extends Component {
	
	render() {
		if(this.props.source && this.props.source.uri && this.props.source.uri.startsWith("http")) {
			return(
					<FastImage {...this.props}/>
			)
		} else {
			return(
					<OrgImage {...this.props}/>
			)
		}
	}
}

Image.propTypes = OrgImage.PropTypes