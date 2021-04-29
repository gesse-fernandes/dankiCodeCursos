import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.View}>
        <Text style= {styles.textStyle}>App Música</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    View:{
        backgroundColor: 'rgb(84,50,168)',
        padding: 20,
        width: '100%'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white'
    }
});
export default Header;