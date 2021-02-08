import ACTIONS from '../actions';
import axios from 'axios';

const signUp = (name, email, password) => (dispatch) => {
  dispatch({type: ACTIONS.SIGN_UP_START, payload: null});
  axios
    .post('http://192.168.43.239:3000/register', {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      dispatch({type: ACTIONS.SIGN_UP_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: ACTIONS.SIGN_UP_ERROR, payload: err});
    });
};
export default signUp;
