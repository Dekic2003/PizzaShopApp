import ACTIONS from '../actions';
import axios from 'axios';

const signIn = (email, password) => (dispatch) => {
  dispatch({type: ACTIONS.SIGN_IN_START, payload: null});
  axios
    .post('http://192.168.100.100:3000/login', {email: email, password: password})
    .then((res) => {
      console.log(res.data)
      dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: ACTIONS.SIGN_IN_ERROR, payload: err});
    });
};
export default signIn;
