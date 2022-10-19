import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

import { cores } from "./estilos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.laranja,
                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 14,
                    lineHeight: 12,
                    marginTop: -23,
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                },
                // tabBarHideOnKeyboard: true 
            }}>
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}
