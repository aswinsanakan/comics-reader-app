import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render () {
    return (
      <View style={{marginTop: 50}}>
        <TextInput
          placeholder="Type something to make pizza.."
          style={{height: 40}}
          onChangeText={(text) => this.setState({text})}  
        />
        <Text style={{padding: 10, fontSize: 20}}>
          {this.state.text.split(" ").map(word => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}