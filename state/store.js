import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import persistReducer from './reducers';

const store = createStore(
  persistReducer,
  compose(applyMiddleware(thunkMiddleware)),
);
const persistor = persistStore(store);

export {store, persistor};
