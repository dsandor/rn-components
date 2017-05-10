'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Modal
} from 'react-native';

export default class MaterialModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.modalVisible
    };
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
      >
        <View style={{flex: 1, marginTop: 22, justifyContent: 'center', alignItems: 'center'}}>
          <View style={[{ backgroundColor: 'white', width: 300, height: 200}, this.props.modalContainerStyle]}>
            <View style={[{ height: 40, borderBottomColor: 'black', borderBottomWidth: 3, justifyContent: 'center', paddingLeft: 15 }, this.props.titleStyle]}>
              <Text style={this.props.titleTextStyle}>{this.props.title}</Text>
            </View>
            <View style={[{flex: 1, paddingLeft: 15, paddingRight: 15}, this.props.contentViewStyle]}>
              { this.props.children }
            </View>
            <View style={[{flexDirection: 'row', height: 40, borderTopColor: 'black', borderTopWidth: 3, justifyContent: 'flex-end', paddingLeft: 15, paddingRight: 15, alignItems: 'center' }, this.props.buttonBarStyle]}>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                if (this.props.onClosed) {
                  this.props.onClosed({button: 'CANCEL'});
                }
              }} style={[{ marginRight: 25 }, this.props.cancelButtonStyle]}>
                <Text>CANCEL</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                if (this.props.onClosed) {
                  this.props.onClosed({button: 'OK'});
                }
              }} style={this.props.okButtonStyle}>
                <Text>OK</Text>
              </TouchableHighlight>
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}