import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  return (
    <View  style={{marginTop:Constants.statusBarHeight}}>
      <Text >Olá gessex</Text>
    
    </View>
  );
}


