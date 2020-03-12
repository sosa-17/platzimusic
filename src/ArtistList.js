/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList} from 'react-native';

import ArtistBox from './ArtistBox';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ArtistList extends Component {
  render() {
    //console.log(this.props.artist);
    return (
      <FlatList
        data={this.props.artist}
        renderItem={({item}) => <ArtistBox artist={item}></ArtistBox>}
      />
    );
  }
}
