import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card_container:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
    
      card:{
        width: '60%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 15,
        backgroundColor: 'white',
      },
      card_content:{
        marginTop: 10,
      },
});

export default style;