import ACTIONS from '../actions';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchPizza = () => (dispatch) => {
  let token = '';
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('REFRESH_TOKEN');
      if (value !== null) {
        token = value;
      }
    } catch (error) {
      console.log(error);
    }
  };
  getData().then(() => {
    dispatch({type: ACTIONS.GET_PIZZA_START, payload: ''});
    axios
      .get('http://192.168.0.129:3000/pizza', {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        dispatch({type: ACTIONS.GET_PIZZA_SUCCESS, payload: res.data});
      })
      .catch((err) => dispatch({type: ACTIONS.GET_PIZZA_ERROR, payload: err}));
  });
};
export default fetchPizza;
