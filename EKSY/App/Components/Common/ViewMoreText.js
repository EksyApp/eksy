import React, {Component} from 'react'
import { Text, View } from 'react-native'

const emptyFunc = ()=>{};

export class ViewMoreText extends Component {
  constructor(props){
    super(props)
    this.resetData()
    this.state = {
    numberOfLines: null,
    opacity: 0
    }
  }

  isTruncated = false
  originalHeight =  0
  shouldShowMore = false
  contentHeight = 0
  isInit = false

resetData(){
  this.isTruncated = false;
  this.originalHeight = 0;
  this.shouldShowMore = false;
  this.isInit = false;
}
  onLayout(event){
    const {x, y, width, height} = event.nativeEvent.layout;

    if(height === 0 || this.state.opacity === 1) return false;

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

      this.setState({
        numberOfLines: this.props.numberOfLines
      })
    }
  }

  checkTextTruncated(height){
    if(height < this.originalHeight){
      this.shouldShowMore = true;
    }
  }

  onPressMore(){
    (this.props.afterExpand || emptyFunc)();
    this.setState({
      numberOfLines: null
    });
  }

  onPressLess(){
    (this.props.afterCollapse || emptyFunc)();
    this.setState({
      numberOfLines: this.props.numberOfLines
    })
  }

  renderViewMore(){
    return (
      <Text onPress={() => {this.onPressMore()}}>
        View More
      </Text>
    )
  }

  renderViewLess(){
    return (
      <Text onPress={() => {this.onPressLess()}}>
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
        return (this.props.renderViewMore || this.renderViewMore.bind(this))(this.onPressMore)
      } else {
        return (this.props.renderViewLess || this.renderViewLess.bind(this))(this.onPressLess)
      }
    }
  }

  render(){
    return (
      <View onLayout={(event) => {this.onLayout(event)}} style={{opacity: this.state.opacity}}>
        <Text
          numberOfLines={this.state.numberOfLines}>
          {this.props.children}
        </Text>
        {this.renderFooter()}

        {
          this.state.numberOfLines &&
          <View style={{width: 1, height: 1}}></View>
        }
      </View>
    )
  }
}

ViewMoreText.propTypes = {
  renderViewMore: React.PropTypes.func,
  renderViewLess: React.PropTypes.func,
  afterCollapse: React.PropTypes.func,
  afterExpand: React.PropTypes.func,
  numberOfLines: React.PropTypes.number.isRequired
}
