import ACTIONS from '../actions';

const updateCart = (item, cart) => (dispatch) => {
  const newCart = cart.concat(item);
  dispatch({type: ACTIONS.ADD_CART_ITEM, payload: newCart});
};

const deleteCart = (item, cart, index) => (dispatch) => {
  if (index === 0 && cart.length === 1) {
    const newCart = cart.splice(index, 1);
    dispatch({type: ACTIONS.DELETE_CART_ITEM, payload: newCart});
    dispatch({type: ACTIONS.DELETE_CART_ITEM, payload: []});
  } else {
    const newCart = cart.splice(index, 1);
    dispatch({type: ACTIONS.DELETE_CART_ITEM, payload: newCart});
  }
};
const eraseCart = (cart) => (dispatch) => {
  cart = [];
  dispatch({type: ACTIONS.ERASE_CART, payload: cart});
};
export {updateCart, deleteCart, eraseCart};
