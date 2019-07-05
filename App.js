import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import BlinkText from './src/components/BlinkText';
import PostList from './src/components/PostList';
import PizzaTranslator from './src/components/PizzaTranslator';


class Greeting extends Component  {
  render () {
    return (
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>Comics App</Text>
        <BlinkText name={this.props.name}></BlinkText>
      </View>
    )
  }
}r

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="User"></Greeting>
      {/* <PizzaTranslator></PizzaTranslator> */}
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <PostList></PostList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
