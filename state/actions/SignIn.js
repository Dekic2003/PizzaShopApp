import ACTIONS from '../actions';
import axios from 'axios';

const signIn = (email, password) => (dispatch) => {
  dispatch({type: ACTIONS.SIGN_IN_START, payload: null});
  axios
    .post('http://192.168.43.239:3000/login', {email: email, password: password})
    .then((res) => {
      dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: ACTIONS.SIGN_IN_ERROR, payload: err});
    });
};
export default signIn;
