'use strict';
import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  Animated
} from 'react-native';

export default class MaterialLineTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fabWidth: new Animated.Value(0)
    };

    this.diameter = this.props.diameter || 60;

    this.defaultAddButton = {
      position: 'absolute',
      width: this.diameter,
      height: this.diameter,
      borderRadius: this.diameter/2,
      backgroundColor: 'white',
      opacity: 0.6,
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      bottom: 10,
      right: 10,
      justifyContent: 'center',
      alignItems: 'center'
    };
  }

  defaultContent() {
    return (<Text style={{fontSize: 28, fontWeight: 'bold'}}>+</Text>);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={[this.defaultAddButton, this.props.style]}>
        { this.props.children || this.defaultContent() }
      </TouchableHighlight>
    );
  }
}