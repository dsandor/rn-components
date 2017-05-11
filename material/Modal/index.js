'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

export default class MaterialModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.modalVisible
    };

    this.defaultModalContainerStyle = {
      shadowRadius: 3,
      shadowOffset: {width: 3, height: 3},
      shadowOpacity: .5,
      shadowColor: '#000000',
      backgroundColor: 'white',
      width: this.props.width || 300,
      height: this.props.height || 120
    };

    this.defaultTitleStyle = {
      height: 40,
      borderBottomColor: 'black',
      borderBottomWidth: 0,
      justifyContent: 'center',
      paddingLeft: 15
    };

    this.defaultTitleTextStyle = {fontSize: 20};

    this.defaultContentViewStyle = {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15
    };

    this.defaultButtonBarStyle = {
      flexDirection: 'row',
      height: 40,
      borderTopColor: 'black',
      borderTopWidth: 0,
      justifyContent: 'flex-end',
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center'
    };

    this.defaultOuterViewStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 6
    };

    this.defaultCancelButtonStyle = { marginRight: 25 };

    this.defaultOkButtonStyle = { };
  }

  setModalVisible(modalVisible) {
    this.setState({modalVisible});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalVisible !== this.props.modalVisible) {
      this.setModalVisible(nextProps.modalVisible);
    }
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.modalVisible}
        style={{}}
      >
        <View style={[this.defaultOuterViewStyle, this.props.outerViewStyle]}>
          <View style={[this.defaultModalContainerStyle, this.props.modalContainerStyle]}>
            <View style={[this.defaultTitleStyle, this.props.titleStyle]}>
              <Text style={[this.defaultTitleTextStyle, this.props.titleTextStyle]}>{this.props.title}</Text>
            </View>
            <View style={[this.defaultContentViewStyle, this.props.contentViewStyle]}>
              { this.props.children }
            </View>
            <View style={[this.defaultButtonBarStyle, this.props.buttonBarStyle]}>
              <TouchableOpacity onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                if (this.props.onClosed) {
                  this.props.onClosed({button: 'CANCEL'});
                }
              }}
                                style={[this.defaultCancelButtonStyle, this.props.cancelButtonStyle]}>
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                if (this.props.onClosed) {
                  this.props.onClosed({button: 'OK'});
                }
              }}
                                style={[this.defaultOkButtonStyle, this.props.okButtonStyle]}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    );
  }


}

