import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pizzaReducer from './reducers/pizza';
import cartReducer from './reducers/cart';
import SignInReducer from './reducers/SignIn';

const rootReducers = combineReducers({
  pizzaReducer,
  cartReducer,
  SignInReducer,
});

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['SignInReducer'],
};

const persistedReducer = persistReducer(config, rootReducers);

export default persistedReducer;
