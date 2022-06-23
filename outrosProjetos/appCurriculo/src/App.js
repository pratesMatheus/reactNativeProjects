import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import foto from './assets/matheusPrates.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/index';


const App = () =>{

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Página do Linkedin', 'https://linkedin.com');
      break;
      case 'facebook':
        Alert.alert('Página do Facebook', 'https://www.facebook.com/');
      break;
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/pratesMatheus');
      break;
    }
  }

  return (
    <>
    <View style = {style.page}>
      <View style = {style.container_cabecalho} >
        <Image source = {foto} style = {style.foto} />
        <Text style = {style.nome} > MATHEUS PRATES </Text>
        <Text style = {style.funcao} > Desenvolvedor Web e Mobile</Text>
        <View style = {style.redes_sociais} >
          <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
            <Icon  name= 'github' size = {30} />  
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
            <Icon name= 'facebook' size = {30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
            <Icon name= 'linkedin' size = {30} />
          </TouchableOpacity>
        </View>
      </View>
      <Card titulo = 'Formação Acadêmica'> 
        <Text style = {style.card_content_text}>2024 - CST Análise e Desenvolvimento de Sistemas;</Text>
        <Text style = {style.card_content_text}>2022 - Técnico em Desenvolvimento de Sistemas;</Text>
      </Card>
      <Card titulo = 'Experiência Profissional'>
        <Text style = {style.card_content_text}>Nasa Web;</Text>
        <Text style = {style.card_content_text}>Tesla Mobile;</Text>
        <Text style = {style.card_content_text}>fakeProfessionalExperiences;</Text>
      </Card>
    </View>
    </>
  );
};

const style = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  
  container_cabecalho:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 18,
  },

  foto:{
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  nome:{
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },

  funcao:{
    color: '#939393',
    marginBottom: 5,
  },

  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },
  
  card_content_text:{
    color: '#939393',
    marginBottom:10,
  }
});

export default App;