'use strict';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet
} from 'react-native';

export default class MaterialLineTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      placeholderTextColor: props.placeholderTextColor || '#cccccc',
      lineWidth: new Animated.Value(0)
    };

    this.onChangeText = this.props.onChangeText || function() {};
  }

  animateOut() {
    this.refs.container.measure((fx, fy, fw, fh, px, py) => {
      Animated.timing(
        this.state.lineWidth,
        {
          toValue: fw,
          duration: 250
        }
      ).start(() => this.setState({showLightLine: false}));
    });
  }

  animateIn() {
    Animated.timing(
      this.state.lineWidth,
      {
        toValue: 0,
        duration: 200
      }).start(() => this.setState({showLightLine: true}));
  }

  render() {
    let lightLine;
    if (this.state.showLightLine) {
      lightLine = <View style={[styles.lightLine, this.props.lightLineStyle]} />;
    } else {
      lightLine = <View />;
    }

    return (
      <View ref="container" style={[styles.container, this.props.containerStyle]}>
        <TextInput placeholder={this.state.placeholder}
                   placeholderTextColor={this.state.placeholderTextColor}
                   style={[styles.textInput, this.props.textInputStyle]}
                   onFocus={() => this.animateOut()}
                   onBlur={() => this.animateIn()}
                   onChangeText={(text) => this.onChangeText(text)}
                   secureTextEntry={this.props.secureTextEntry}
        />
        {lightLine}
        <View style={[styles.lightLine, this.props.lightLineStyle]} />
        <Animated.View
          style={[styles.decoratorLine, {width: this.state.lineWidth}, this.props.decoratorLineStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 48,
    marginTop: 0,
    justifyContent: 'space-around',

  },
  lightLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginLeft: 0,
    marginRight: 0,
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
  },
  decoratorLine: {
    backgroundColor: '#00bcd4',
    height: 2,
    marginLeft: 0,
    marginRight: 0,
    alignSelf: 'center',
  }
});