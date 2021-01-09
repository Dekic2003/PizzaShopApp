import ACTIONS from '../actions';
import axios from 'axios';

const fetchPizza = () => (dispatch) => {
  dispatch({type: ACTIONS.GET_PIZZA_START, payload: ''});
  axios({
    method: 'GET',
    url: 'https://pizzashop-api.herokuapp.com/pizza',
  })
    .then((res) => {
      dispatch({type: ACTIONS.GET_PIZZA_SUCCESS, payload: res.data});
    })
    .catch((err) => dispatch({type: ACTIONS.GET_PIZZA_ERROR, payload: err}));
};
export default fetchPizza;
