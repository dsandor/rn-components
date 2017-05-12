'use strict';

import React, {Component} from 'react';
import {
  View,
  TextInput,
} from 'react-native';

export default class MaterialShadowTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      placeholderTextColor: props.placeholderTextColor || '#cccccc'
    };

    this.onChangeText = this.props.onChangeText || function() {};

    this.defaultContainerStyle = {
      flexDirection: 'row',
      height: 48,
      marginTop: 20,
      justifyContent: 'space-around'
    };

    this.defaultTextInputStyle = {
      flex: 1,
      paddingLeft: 5,
      borderWidth: 1,
      borderColor: '#cccccc',
      backgroundColor: 'white',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
      shadowColor: '#000000',
      shadowOffset: {width: 3, height: 3},
      shadowOpacity: 0.25,
      shadowRadius: 3,
    };
  }

  render() {
    return (
      <View style={[this.defaultContainerStyle, this.props.containerStyle]}>
        <TextInput placeholder={this.state.placeholder}
                   placeholderTextColor={this.state.placeholderTextColor}
                   style={[this.defaultTextInputStyle, this.props.textInputStyle]}
                   onChangeText={(text) => this.onChangeText(text)}
        />
      </View>
    );
  }
}