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
import SignUp from './Components/Screens/Auth/SignUp';
import Loading from './Components/Screens/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './state/store';
import {Provider} from 'react-redux';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

function AuthStackScreens() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
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
  const [isLoading, setLoading] = useState(true);
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('USER');
      if (value !== null) {
        setUser(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
    useEffect(() => {
        getUser();
    }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoading ? (
          <Loading />
        ) : user === null ? (
          <AuthStackScreens />
        ) : (
          <AppStackScreens />
        )}
      </NavigationContainer>
    </Provider>
  );
}
