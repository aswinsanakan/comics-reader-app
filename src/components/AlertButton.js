import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';

export default class AlertButton extends Component {

  _clickButton () {
    Alert.alert('CAUTION: A button was clicked!')
  }

  render () {
    return (
      <View style={{margin: 10}}>
        <Button
          title='Click for Alert'
          onPress={this._clickButton}
        />
      </View>
    )
  }
}