import ACTIONS from '../actions';

let initialState = {
  User: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN_START:
      return {
        ...initialState,
        loading: true,
      };
    case ACTIONS.SIGN_IN_SUCCESS:
      console.log(action.payload);
      return {
        ...initialState,
        User: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case ACTIONS.SIGN_IN_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    case ACTIONS.SIGN_UP_START:
      return {
        ...initialState,
        loading: true,
      };
    case ACTIONS.SIGN_UP_SUCCESS:
      return {
        ...initialState,
        USER: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case ACTIONS.SIGN_UP_ERROR:
      return {
        ...initialState,
        USER: action.payload,
      };
    case ACTIONS.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
