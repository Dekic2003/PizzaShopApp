import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers';

const store = createStore(
  rootReducers,
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;
