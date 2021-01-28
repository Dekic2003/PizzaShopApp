import ACTIONS from '../actions';
import axios from 'axios';

const fetchPizza = () => (dispatch) => {
  dispatch({type: ACTIONS.GET_PIZZA_START, payload: ''});
  axios
    .get('http://192.168.0.129:3000/pizza', {
      headers: {
          'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZjYWU1ZDljMjVhMTQwMmM4NjZlZDUiLCJpYXQiOjE2MTE3NDQxNTYsImV4cCI6MTYxMTgzMDU1Nn0.tDwhNg97os7W3fc-RWMyT2eUZR-R16uoAc3DybEGEzs'
      }})
    .then((res) => {
      dispatch({type: ACTIONS.GET_PIZZA_SUCCESS, payload: res.data});
    })
    .catch((err) => dispatch({type: ACTIONS.GET_PIZZA_ERROR, payload: err}));
};
export default fetchPizza;
