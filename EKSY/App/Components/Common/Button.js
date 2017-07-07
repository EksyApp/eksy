import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import * as Theme from '../../Theme'

export class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string
}


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: Theme.accentColor,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: Theme.buttonColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Theme.accentColor,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
};

// export default Button;
