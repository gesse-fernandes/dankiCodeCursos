import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  InputEvent,
  View,
  Button,
} from 'react-native';
import Body from './Components/Body.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      pagina: 'home',
    }
    /* setTimeout(() => {
      this.setState({contador:this.state.contador+1 })
     }, 2000)*/
    /*setTimeout(() => {
      this.setState({
        pagina: 'contato'
      })
    }, 2000)
  }*/
  }
  componentWillMount()
  {
    alert('antes de ser renderizado');
  }
  alterarAba = (pagina) => {
      this.setState({ pagina: pagina })
    }
  render() {
    if (this.state.pagina == 'home') {
      return (

        <View style={{ marginTop: 30 }}>
          <Body texto="rapaz" titulo="clique aqui - contweb"></Body>
          <View>
            <Text>Home</Text>
            <Button title="clique para ir para o contato" onPress = {()=> this.alterarAba('contato')}></Button>
         </View>
        </View>
      );
    } else if(this.state.pagina == 'contato') {
            return (

        <View style={{ marginTop: 30 }}>
          <Body texto="rapaz" titulo="clique aqui - contweb"></Body>
          <View>
                  <Text>Contato</Text>
                   <Button title="clique para ir para o home" onPress = {()=> this.alterarAba('home')}></Button>
         </View>
        </View>
      );      
    }
  }
}


