import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Home from "./Components/Screens/Home";
import Cart from "./Components/Screens/Cart";



const Stack = createStackNavigator();

const config = {
    animation: 'timing',
    config: {
        duration:1000
    },
};

export default function App() {

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureDirection:"horizontal",
                    ...TransitionPresets.SlideFromRightIOS
                }}
                initialRouteName="Home"
                animation="fade"

            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
