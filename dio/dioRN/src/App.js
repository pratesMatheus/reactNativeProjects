import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/99659977?v=4';
const urlToMyGitHub = 'https://github.com/pratesMatheus';

const App = () => {

   const handlePressGoToGitHub = async() =>{
      console.log('Verificando link');
      const res = await Linking.canOpenURL(urlToMyGitHub);
      if(res){
         console.log('Link aprovado');
         console.log('Abrindo o link');
         await Linking.openURL(urlToMyGitHub);
      }
   }

   return (
      <SafeAreaView style = {style.container}>
         <StatusBar backgroundColor= {colorGitHub} barStyle= 'light-content'/> 
         <View style = {style.content}>
            <Image accessibilityLabel='Matheus Prates' style ={style.avatar} source={{uri: imageProfileGitHub}}/>
            <Text 
            accessibilityLabel='Nome: Matheus Prates'
            style={[style.defaultText, style.name, {color:'orange'}]}>Matheus Prates</Text>
            <Text 
            accessibilityLabel='Apelido: pratesMatheus'
            style={[style.defaultText, style.nickname]}>pratesMatheus</Text>
            <Text 
            accessibilityLabel='Descrição: 18 anos | 
            técnico em Desenvolvimento de sistemas no 1°sem. de 2022 concluído 
            | Cursando ADS (indo o 2°sem. em agosto) 
            | Estudando agora JS e React Native'
            style={[style.defaultText, style.description]}>18 anos | 
               técnico em Desenvolvimento de sistemas no 1°sem. de 2022 concluído 
               | Cursando ADS (indo o 2°sem. em agosto) 
               | Estudando agora JS e React Native
            </Text>
            <Pressable onPress={handlePressGoToGitHub}>
               <View style = {style.button}>
                  <Text style = {[style.defaultText, style.textButton]}>
                     Abrir em GitHub
                  </Text>
               </View>
            </Pressable>
         </View>
      </SafeAreaView> 
      //SafeAreaView - serve para: proteger o componente de sair de uma área que o mesmo não tenha acesso
      //tag Image obrigatóriamente tem que ter largura e altura
      //Flex-Box: alinhar elementos na tela
   ); 
};

export default App;

const style = StyleSheet.create({
   container:{
      //nativamente, os componentes em react são em coluna/column
      //Para mudar isso, basta usar o flexDirection: 'row'
      backgroundColor: colorGitHub,
      flex: 1, //Eu expandi para toda a tela
      justifyContent: 'center',
      alignItems: 'center',
      //flexDirection: 'row',
   },

   content: {
      alignItems: 'center',
      padding: 20,
   },

   avatar: {
      height: 250,
      width: 250,
      borderRadius: 100,
      borderColor: 'whitesmoke',
      borderWidth: 1,
   },

   defaultText:{
      color: colorFontGitHub,
   },

   name:{
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 24,
   },

   nickname:{
      fontSize: 18,
      color: colorDarkFontGitHub,
   },

   description:{
      fontSize: 14,
      fontWeight: 'bold',
   },

   button:{
      marginTop: 20,
      backgroundColor: colorDarkFontGitHub,
      borderRadius:15,
      padding:20,
   },

   textButton:{
      fontSize: 16,
      fontWeight: 'bold',
   },
   
});