import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './Componentes/Header.js';
import Body from './Componentes/Body.js';
export default class App extends React.Component {

  render() {
    return (

      <View style={{ marginTop: 120 }}>
        <Header></Header>
        <Body></Body>
      </View>




    );
  }
}

