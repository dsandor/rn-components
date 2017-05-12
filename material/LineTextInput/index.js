'use strict';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions,
  Animated,
  StyleSheet
} from 'react-native';

const width = Dimensions.get('window').width;

export default class MaterialLineTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      placeholderTextColor: props.placeholderTextColor || '#cccccc',
      lineWidth: new Animated.Value(0)
    };
  }

  componentDidMount() {

  }

  animateOut() {
    this.refs.container.measure((fx, fy, fw, fh, px, py) => {
      console.log('fw:', fw);
      Animated.timing(
        this.state.lineWidth,
        {
          toValue: fw - 10,
        }
      ).start();
    });
  }

  animateIn() {
    Animated.timing(
      this.state.lineWidth,
      {
        toValue: 0,
      }).start();
  }

  render() {
    return (
      <View ref="container" style={styles.container}>
        <TextInput placeholder={this.state.placeholder}
                   placeholderTextColor={this.state.placeholderTextColor}
                   style={styles.textInput}
                   onFocus={() => this.animateOut() }
                   onBlur={() => this.animateIn() }
        />
        <View style={styles.lightLine} />
        <Animated.View
          style={[styles.decoratorLine, {width: this.state.lineWidth}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 48,
    marginTop: 20,
    justifyContent: 'space-around',

  },
  lightLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginLeft: 5,
    marginRight: 5,
  },
  textInput: {
    flex: .8,
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  decoratorLine: {
    backgroundColor: '#00bcd4',
    height: 2,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
  }
});