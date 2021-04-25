import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  Header = () => {
    return (
      <Text>Home| Sobre | Contato</Text>
    );
  }
  Body = () => {
    return (
      <Text>Conteudo do meu app</Text>
    );
  }
  Footer = () =>
  {
    return (
      <Text>Aqui é meu rodape do meu aplicativo</Text>
    );
  }  
  render() {
    return (

      <View style={{ marginTop: 120 }}>
        <this.Header></this.Header>
        <this.Body></this.Body>
        <this.Footer></this.Footer>
        <Botao></Botao>
      </View>




    );
  }
}

const Botao = () => {
  return (
    <Button title= 'Clique aqui'></Button>
   );
 }