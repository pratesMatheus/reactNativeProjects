import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {

  const [toggle, setToggle] = useState(false) //false; true;

  const handleChangeToggle  = () => setToggle( oldToggle => !oldToggle ); 
  
  useEffect(() => {
    //Liga flash do celular
    Torch.switchState(toggle);
    //Console.log('Flash do celular verificado');
  }, [toggle]);

  useEffect(() => {
    //Quando o celular for chacoalhado, o toggle será "rodado"
    const subscription = RNShake.addListener(() => {
      handleChangeToggle( oldToggle => !oldToggle )
    });
    //Esta função vai ser chamada quando o componente for ser desmontado
    return () => subscription.remove();
  }, [] );

  return (
    <View style = {toggle ? style.containerLight : style.container}>

      <TouchableOpacity onPress={handleChangeToggle}>
        <Image 
          style ={ toggle ? style.lightningOn : style.lightningOff } 
          source={
          toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')
        }/>

        <Image 
          style ={ style.dioLogo } 
          source={
          toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')
        }/>
      </TouchableOpacity>
    
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent:'center',
  },
  containerLight:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },

  lightningOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightningOff:{
    tintColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
export default App;