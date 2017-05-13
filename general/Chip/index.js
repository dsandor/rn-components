'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.modalVisible
    };

    this.defaultContainerStyle = {
      height: 28,
      borderRadius: 14,
      backgroundColor: '#e0e0e0',
      minWidth: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 2
    };

    this.defaultChipDeleteButtonStyle = {

    };

    this.defaultChipDeleteButtonChildren = this.props.chipDeleteButtonChildren || (<Text style={{fontWeight: 'bold'}}>x</Text>);

    this.onPressHandler = this.props.onPress || function() { console.warn('Chip delete pressed but no handler assigned.'); };
  }

  render() {
    return (
      <View style={[this.defaultContainerStyle, this.props.containerStyle]}>
        <View style={this.props.titleStyle}><Text>{this.props.title}</Text></View>
        <TouchableHighlight onPress={() => this.onPressHandler()} style={[this.defaultChipDeleteButtonStyle, this.props.chipDeleteButtonStyle]}>
          {this.defaultChipDeleteButtonChildren}
        </TouchableHighlight>
      </View>
    );
  }
}

