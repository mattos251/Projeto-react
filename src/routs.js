import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Servicos from "./telas/Servicos";
import { Header } from "react-native/Libraries/NewAppScreen";
import Carrinho from "./telas/carrinho";

const stack = createStackNavigator();

export default function Routes(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Servicos"
                component={Servicos}
                options={{Headershown: false}}
                />

                <Stack.Screen
                name="Carrinho"
                component={Carrinho}
                options={{Headershown: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )

}