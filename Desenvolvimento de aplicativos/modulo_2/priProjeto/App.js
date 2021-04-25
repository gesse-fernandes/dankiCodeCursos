import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
         
            <View >
              <Text>Olá mundo</Text>
        <Text>Olá mundo 2</Text>
        <Text>Minha imagem:</Text>
        <Image style= {{width:50, height:50}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
            </View>
                  
            
        
        
  );
  }
}

