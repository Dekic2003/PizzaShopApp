import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Home from './Components/Screens/App/Home';
import Cart from './Components/Screens/App/Cart';
import SignIn from './Components/Screens/Auth/SignIn';
import SignUp from './Components/Screens/Auth/SignUp';

import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Navigation = () => {
  const User = useSelector((state) => state.AuthReducer.USER);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        initialRouteName="SignIn"
        animation="fade">
        {User ? (
          <>
            <Stack.Screen
              name="Home"
              screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                animation: 'fade',
              }}
              component={Home}
            />
            <Stack.Screen
              name="Cart"
              screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                animation: 'fade',
              }}
              component={Cart}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}
              component={SignIn}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
