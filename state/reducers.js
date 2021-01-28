import {combineReducers} from 'redux';
import pizzaReducer from './reducers/pizza';
import cartReducer from './reducers/cart';
import SignInReducer from './reducers/SignIn';

const rootReducers = combineReducers({
  pizzaReducer,
  cartReducer,
  SignInReducer,
});

export default rootReducers;
