import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pizzaReducer from './reducers/pizza';
import cartReducer from './reducers/cart';
import AuthReducer from './reducers/Auth';

const rootReducers = combineReducers({
  pizzaReducer,
  cartReducer,
  AuthReducer,
});

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer'],
};

const persistedReducer = persistReducer(config, rootReducers);

export default persistedReducer;
