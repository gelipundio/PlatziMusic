/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ArtistList from './ArtistList'
import { getArtists } from './ApiClient'

export default class HomeView extends Component {

    constructor(props){
        super(props)
        this.state = {
            artists : []
        }

    }

    componentDidMount(){
        getArtists()
            .then( data => this.setState({ artists : data }))
    }

    render() {
        const artists = this.state.artists

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
