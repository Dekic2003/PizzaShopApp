import ACTIONS from '../actions';

let initialState = {
  USER: null,
  loading: false,
  error: null,
};

const SignInReducer = (state = initialState, action) => {
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
        USER: action.payload,
      };
    case ACTIONS.SIGN_IN_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SignInReducer;
