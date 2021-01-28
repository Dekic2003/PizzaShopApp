import ACTIONS from '../actions';

let initialState = {
  all: null,
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
      return {
        ...initialState,
        all: action.payload,
      };
    case ACTIONS.SIGN_IN_ERROR:
      return {
        ...initialState,
        all: action.payload,
      };
    default:
      return state;
  }
};

export default SignInReducer;
