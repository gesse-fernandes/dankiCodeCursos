import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button,ScrollView } from 'react-native';
import Header from './Componentes/Header.js';
import Body from './Componentes/Body.js';
export default class App extends React.Component {
  constructor(props)
  { 
    super(props);
    this.mostrarTexto = true;
    this.mostrarBotao = true;
  }
  render() {
    
    return (

      <ScrollView style={{ marginTop: 20, flex:1 }}>
        {
          (this.mostrarTexto)
            ?
            <Text>texto</Text>
            :
            <View></View>
        }
        {
          (this.mostrarBotao) ?
            <Button title="clique aqui"></Button>
            :
            <View><Text>Vazio</Text></View>
        }
      </ScrollView>

    );
  }
}


