/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux'

import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'

export default class PlatziMusic extends Component {
    
    render() {
        const isAndroid = Platform.OS === 'android'
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='home' component={ HomeView } hideNavBar={!isAndroid} ></Scene>
                    <Scene key='artistDetail' component={ ArtistDetailView } hideNavBar={false}></Scene>
                </Scene>
            </Router>      
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
