import React, {Component} from 'react';
import {View, Image} from 'react-native';

import ColorText from './ColorText';

export default class Post extends Component {
  render () {
    return (
      <View style={{alignItems: 'center', padding: 40}}>
        <Image source={this.props.pic} style={{width: 300, height: 200}}></Image>
        <ColorText 
            title={this.props.title} 
            content={this.props.content}
          ></ColorText>
      </View>
    )
  }
}