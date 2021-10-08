import React , {useState,useEffect} from 'react'
import {  useNavigation }  from  '@react-navigation/native' 
import { KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Text ,  View} from 'react-native';
import css from './css'


export default function Login()
{
    const  navigation  =  useNavigation();
    const [display, setDisplay]=useState('none');

    return(
        <KeyboardAvoidingView style={[css.container]}>

            <View style={css.login__logomarca}>
               <Image source={{ uri: '../../../assets/icon.png' }} />
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:' />
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=> navigation.navigate('Servicos') }>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
{/*<Botao valor = 'entrar' acao = {() => navigation.navigate('Servicos') } />*/}