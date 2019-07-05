import React, {Component} from 'react';
import { Text } from 'react-native';

export default class BlinkText extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowingContent: true
    }
    setInterval(() => (
      this.setState(prevState => (
        { isShowingContent: !prevState.isShowingContent }
      ))
    ), 1000);
  }
  render() {
    if (!this.state.isShowingContent) {
      return (
        <Text style={{height: 20}}></Text>
      );
    } else {
      return (
        <Text style={{height: 20, color: 'green'}}>Hello {this.props.name}!</Text>
      );
    }
  }
}