import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Header from './src/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text> Buscador</Text>
        <Text> Categorias </Text>
        <Text> Sugerencias </Text>
        <SuggestionList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: 'green',
      android: 'blue',
    }),
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});