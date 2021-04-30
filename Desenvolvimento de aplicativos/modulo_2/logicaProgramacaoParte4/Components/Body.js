import {
    StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Body extends React.Component{
    constructor(props)
    {
        super(props);
        this.nome = "gessex";
    }
    chamarnome = () => {
        return (
            <Text>{
                this.nome
            }</Text>
        );
    }
    render() {
        return (
            <View>
                <Text>{ this.props.texto}</Text>
                <Button title={ this.props.titulo}></Button>
            </View>  
        );
    }
}
