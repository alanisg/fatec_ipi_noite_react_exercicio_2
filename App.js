import React, { useState } from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function App() {
 const[numero1,setNumero1] = useState(0);
 const[numero2,setNumero2] = useState(0);
 const[numero3,setNumero3] = useState(0);
 const[numero4,setNumero4] = useState(0);
 const[numero5,setNumero5] = useState(0);
 const[numero6,setNumero6] = useState(0);

 
function gerarNumeroAleatorio (){
  
 var n = Math.floor(Math.random() * 60) +1;

  
    return n;
  }
  
function gerarNumeroMega(){
  var n1,n2,n3,n4,n5,n6;
  n1 = gerarNumeroAleatorio();
  
  do{
    n2 = gerarNumeroAleatorio();
  
  }while(n1 === n2);

  do{n3 =gerarNumeroAleatorio();
  }while(n3 === n2 || n3 === n1);

  do {
    n4 =gerarNumeroAleatorio();
    
  } while (n4 === n3 ||n4 === n2 || n4 === n1 );
  do {
    n5 = gerarNumeroAleatorio();
  } while (n5 === n4 || n5 === n3|| n5 ===n2||n5 === n1);
  do {
    n6 = gerarNumeroAleatorio();
  } while (n6 ===n5 || n6 === n4 || n6=== n3|| n6===n2 ||n6 === n1);
  
    setNumero1(n1);
    setNumero2(n2);
    setNumero3(n3);
    setNumero4(n4);
    setNumero5(n5);
    setNumero6(n6);
   

}

 const gerarMega =() =>{
   gerarNumeroMega();
  }
      
  return (
    <View style={styles.container}>
      <Text>click para gerar os numeros da mega</Text>
      <View style={{width: '80%' , marginTop: 8}}>
     
      <Button title="Adicionar numeros da mega"
          onPress={gerarMega}
      />
     
      </View>
   
      <View>
  <Text>{numero1}{-numero2}{-numero3}{-numero4}{-numero5}{-numero6}</Text>
      </View>
      
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
