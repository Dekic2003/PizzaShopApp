import React, {useState, useEffect} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Home from './Components/Screens/App/Home';
import Cart from './Components/Screens/App/Cart';
import SignIn from './Components/Screens/Auth/SignIn';

import store from './state/store';
import {Provider} from 'react-redux';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

function AuthStackScreens() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'Vertical',
        ...TransitionPresets.SlideFromRightIOS,
      }}
      animation="fade">
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}
function AppStackScreens() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Home"
      animation="fade">
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Cart" component={Cart} />
    </AppStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user === null ? <AuthStackScreens /> : <AppStackScreens />}
      </NavigationContainer>
    </Provider>
  );
}
