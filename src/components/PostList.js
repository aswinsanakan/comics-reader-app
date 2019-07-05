import React, {Component} from 'react';
import {View, Button, ActivityIndicator} from 'react-native';

import Post from './Post';

export default class PostList extends Component {
  constructor (props) {
    super(props);
    this.state = {isLoading: true, posts: [], totalCount: 0, lastLoadedNum: 0};
  }

  getMoreComics ({limit=5, lastNum}={}) {
    console.log('getMoreComics - ', lastNum);
    let promises = [];
    for (let i = 0; i < limit; i++) {
      promises.push(fetch(`https://xkcd.com/${lastNum - (i+1)}/info.0.json`).then(r=>r.json()))
    }
    return Promise.all(promises)
      .then(comics => {
        comics = [...this.state.posts, ...comics];
        this.setState(prevState => ({posts: comics, lastLoadedNum: comics[comics.length-1].num}));
      })
  }

  componentDidMount() {
    return fetch('https://xkcd.com/info.0.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({isLoading: false, posts: [responseJson], totalCount: responseJson.num, lastLoadedNum: responseJson.num})
        this.getMoreComics({lastNum: this.state.lastLoadedNum});
      })
      .catch(error => {
        console.error(error);
      })
  }

  render () {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View>
        {
          this.state.posts.map((post,i) => {
            // console.log(post.title);
            return (
              <Post key={'post'+i} pic={{uri: post.img}} title={post.title} content={post.alt}></Post>
            );
          })
        }
        <Button
          onPress={() => this.getMoreComics({lastNum: this.state.lastLoadedNum})}
          title='Load More'
          />
        {/* <Post pic={this.posts[0].pic} title={this.posts[0].title} content="Blah blah blah"></Post> */}
      </View>
    )
  }
}