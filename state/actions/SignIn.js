import ACTIONS from '../actions';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUser = async (data) => {
  try {
    await AsyncStorage.setItem('USER', JSON.stringify(data.user));
    await AsyncStorage.setItem('REFRESH_TOKEN', data.refreshToken);
    await AsyncStorage.setItem('ACCESS_TOKEN', data.accessToken);
  } catch (error) {
    console.log(error);
  }
};

const signIn = (email, password) => (dispatch) => {
  dispatch({type: ACTIONS.SIGN_IN_START, payload: ''});
  axios
    .post('http://192.168.0.129:3000/login', {email: email, password: password})
    .then((res) => {
      storeUser(res.data);
      dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({type: ACTIONS.SIGN_IN_ERROR, payload: err});
    });
};
export default signIn;
