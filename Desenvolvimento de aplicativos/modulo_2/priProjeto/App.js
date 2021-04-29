import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button,ScrollView } from 'react-native';
import Header from './Componentes/Header.js';
import Body from './Componentes/Body.js';
export default class App extends React.Component {
  constructor(props)
  { 
    super(props);
    //console.warn("Aqui é um aviso");
    console.disableYellowBox = true;
    
    this.mostrarTexto = true;
    this.mostrarBotao = true;
  }
  mostrarConteudo = () => {
    var mostrarBody = 1;
        if (this.mostrarTexto && mostrarBody == 1) {
      return (
     
        <ScrollView style={{ marginTop: 20, flex: 1 }}>
             <Header></Header>
          <Body></Body>
        </ScrollView>

      );
    }
    else {
         return (
     
        <ScrollView style={{ marginTop: 20, flex: 1 }}>
        <Body></Body>
        </ScrollView>

      );
    }
  }
  render() {
    return (
    <View>
      {
        this.mostrarConteudo()
        }
        </View>
    );
  }
}


