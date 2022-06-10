import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import{
  StyleSheet,
  Text,
  TextInput,
  View
}from 'react-native';
import { TouchableOpacity } from 'react-native-web';

type Props = {};
  export default class app extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.entradas}>
            <TextInput placeholder="Massa" keyboardType='numeric' style={styles.input}/>
            <TextInput placeholder="Altura" keyboardType='numeric' style={styles.input}/>
          </View>
          <TouchableOpacity style={styles.Button} onPress={()=>{}}><Text style={styles.ButtonText}>Calcular</Text></TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#f5fcff',
    },
    endradas: {
      flexDirection: 'row',
    },
    input: {
      height: 80,
      textAlign: 'center',
      width: "50%",
      fontSize: 50,
      marginTop: 24,    
    },
    Button: {
      backgroundColor: "#89ffa5"
    },
    ButtonText: {
      alignSelf: 'center',
      padding: 30,
      fontSize: 25,
      color: '#6dc4a4',
      fontWeight: 'bold',
    }

  });

