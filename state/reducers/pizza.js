import ACTIONS from '../actions';

let initialState = {
  all: [],
  loading: false,
  error: null,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PIZZA_START:
      return {
        ...initialState,
        loading: true,
      };
    case ACTIONS.GET_PIZZA_SUCCESS:
      return {
        ...initialState,
        all: action.payload,
      };
    case ACTIONS.GET_PIZZA_ERROR:
      return {
        ...initialState,
        all: action.payload,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
