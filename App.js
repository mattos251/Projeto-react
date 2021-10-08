import  *  as  React  from  'react' ; 
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import Servicos from './src/telas/Servicos'
import Login from './src/telas/Login/index'
import Carrinho from './src/telas/carrinho/index'
import  {  NavigationContainer  }  from  '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack =  createStackNavigator(); 

function  Mystack(){ 
  return  ( 
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="Servicos" component={ Servicos }/>
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
