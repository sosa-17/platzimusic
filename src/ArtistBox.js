/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ArtistBox extends Component {
  render() {
    //console.log(this.props.artist);
    const {image, name, likes, comments} = this.props.artist;

    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart" size={30} color="gray" />
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes" size={30} color="gray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 180,
  },
  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    marginTop: 10,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'gray',
  },
});
