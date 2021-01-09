import ACTIONS from '../actions';
let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CART_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTIONS.DELETE_CART_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
