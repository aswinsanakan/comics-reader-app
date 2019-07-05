import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleBlue: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentBlack: {
    color: 'black',
    fontSize: 15
  }
});

export default class ColorText extends Component {
  render () {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleBlue}>{this.props.title}</Text>
        <Text style={styles.contentBlack}>{this.props.content}</Text>
      </View>
    )
  }
}