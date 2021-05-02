import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  /*
  var i = 0;
  while (i < 10) {
    alert(i);
    i++;
  }*/
  /*
  for (var i = 0; i < 10; i++)
  {
    alert(i);
    }*/
  var component = [];
  for (var i = 0; i < 100; i++)
  {
    component.push(<Text>Selecione: { i}</Text>)
    }

  return (
   // <View  style={{marginTop:Constants.statusBarHeight}}>
    <View style={{marginTop:30}}>
      {
        component.map((val) => {
          return (val);
        })
      }
    </View>
  );
}


