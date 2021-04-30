import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './Components/Body.js';
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.body = new Body();
    this.body.nome = "ok";
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Body></Body>
        {
          this.body.chamarnome()
        }
      </View>
    );
  }
}


