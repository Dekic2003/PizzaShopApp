import {combineReducers} from 'redux';
import pizzaReducer from './reducers/pizza';
import cartReducer from './reducers/cart';

const rootReducers = combineReducers({pizzaReducer, cartReducer});

export default rootReducers;
