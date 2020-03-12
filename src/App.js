import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ArtistList from './ArtistList';
import getArtist from './api_client';

export default class PlatziMusic extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      artists: [],
    };
  }
  async componentWillMount() {
    console.log('data');
    let json = await getArtist();
    let newArtists = [];
    json.topartists.artist.map(artist =>
      newArtists.push({
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 200,
        comments: 200,
      }),
    );

    this.setState({
      artists: newArtists,
    });
  }
  render() {
    const artist = {
      image:
        'https://www.infobae.com/new-resizer/2eqmG-m9Kn83XcQkPJJ0NLt-jDc=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/13225712/John-Deacon-3.jpg',
      name: 'David Bowie',
      likes: 200,
      comments: 200,
    };
    //const artists = Array(500).fill(artist);
    return (
      <View style={styles.container}>
        <ArtistList artist={this.state.artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'lightgray',
  },
});
