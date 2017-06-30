/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import ArtistList from './ArtistList'

export default class PlatziMusic extends Component {

    constructor(props){
        super(props)

        const currentArtist ={
            imgSource : 'https://pbs.twimg.com/profile_images/3246448859/12184c1d111736d7420b7f4f0bb552a1_400x400.jpeg',
            name : 'Rata Blanca2 ',
            likes : 200,
            comments : 140
        }
        this.state = {
            artists : Array(15).fill(currentArtist)
        }

    }

    render() {
        return (
            <View style={ styles.container }>
                <ArtistList artists={ this.state.artists }/>
            </View>            
        )
    }

}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop : 50
  },
})

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
