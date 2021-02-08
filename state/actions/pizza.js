import ACTIONS from '../actions';
import axios from 'axios';
import {useSelector} from 'react-redux';

const fetchPizza = (token) => (dispatch) => {
  dispatch({type: ACTIONS.GET_PIZZA_START, payload: ''});
  axios
    .get('http://192.168.43.239:3000/pizza', {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      dispatch({type: ACTIONS.GET_PIZZA_SUCCESS, payload: res.data});
    })
    .catch((err) => dispatch({type: ACTIONS.GET_PIZZA_ERROR, payload: err}));
};
export default fetchPizza;
