import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Components/Screens/Home";
import Cart from "./Components/Screens/Cart";

const Stack = createStackNavigator();



export default function App() {

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart} options={{ gestureDirection:'vertical'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
