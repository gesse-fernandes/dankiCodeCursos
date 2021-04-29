import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button,ScrollView , Platform} from 'react-native';
import Header from './Componentes/Header.js';
import Body from './Componentes/Body.js';
export default class App extends React.Component {
  constructor(props)
  { 
    super(props);
    //console.warn("Aqui é um aviso");
    console.disableYellowBox = true;
    this.plataforma = Platform.OS;

    this.mostrarTexto = true;
    this.mostrarBotao = true;
  }
  mostrarConteudo = () => {
    var mostrarBody = 1;
    var conteudo = "";
    if (this.plataforma == "android")
    {
      conteudo = "Olá voce esta utilizando o android!";
    }
    else if (this.plataforma == "ios") {
      conteudo = "Olá voce esta utilizando  IOS";
    }
    else if (this.plataforma == "web")
    {
      conteudo = "Olá voce esta utilizando  Web";
      }
    /*
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
    }*/
    return (
      <View>
        <Text>{conteudo}</Text>
      </View>
    );
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


