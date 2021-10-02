import  *  as  React  from  'react' ; 
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import Servicos from './src/telas/Servicos'
import Carrinho from './src/telas/carrinho/index'
import  {  View ,  Text  }  from 'react-native' ; 
import  {  NavigationContainer  }  from  '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import estilos from './src/telas/Servicos/Item/estilos.js';

const Stack =  createStackNavigator(); 

function  Mystack(){ 
  return  ( 
      <Stack.Navigator> 
          <Stack.Screen style={estilos.title} name="Servicos"  component={ Servicos } />
          <Stack.Screen name="Carrinho" component={ Carrinho } />
      </Stack.Navigator>
  ); 
}

export default function App(){ 
  return( 
    <NavigationContainer> 
        <Mystack/>
    </NavigationContainer>
  ); 
}
