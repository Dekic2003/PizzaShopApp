import ACTIONS from '../actions';
import axios from 'axios';
import {store} from '../store';

const fetchPizza = () => (dispatch) => {
  let token = store.getState().AuthReducer.accessToken;
  console.log('Origigi ',token);

  axios.interceptors.request.use(
    async (config) => {
      config.headers = {
        Authorization: token,
      };
      return config;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const request = error.config;
      if (error.response.status === 401 && !request._retry){
        dispatch({
          type: ACTIONS.GET_PIZZA_ERROR,
          payload: null,
        });
        request._retry = true;
        const refreshToken = store.getState().AuthReducer.refreshToken;
        return axios
          .post('http://192.168.50.103:3000/refreshToken', {
            refreshToken,
          })
          .then((res) => {
            token = res.data.accessToken;
            console.log('token',token)
            request.headers.Authorization = token;
            console.log('Update ', request);
            dispatch({
              type: ACTIONS.REFRESH_TOKEN_SUCCESS,
              payload: token,
            });
            return axios(request);
          });
      }

      return Promise.reject(error);
    },
  );

  axios.get('http://192.168.50.103:3000/pizza').then((res) => {
    console.log('okino');
    dispatch({
      type: ACTIONS.GET_PIZZA_SUCCESS,
      payload: res.data,
    });
  });
};
export default fetchPizza;
