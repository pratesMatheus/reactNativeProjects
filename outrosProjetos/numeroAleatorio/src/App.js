import React, { useState } from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import { useState } from 'react';

const App = ()=> {

    const [numero, setNumero] = useState(10)

    function handleNumero(){
        const novoNumero = Math.floor(Math.random() * 1000);

        setNumero(novoNumero);
        //setNumero(numero + novoNumero) faria o trabalho de soma
    }

    return (
        <SafeAreaView style = {style.container}>
                <Text style = {style.numero}>{numero}</Text> 
                <TouchableOpacity onPress={handleNumero} style = {style.botao}>
                    <Text>Gerar Número</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: 'orange',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },

  numero:{
    fontSize: 40,
    color: 'whitesmoke',
    fontWeight: 'bold',
  },

  botao:{
    backgroundColor: 'whitesmoke',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  }
});

export default App;