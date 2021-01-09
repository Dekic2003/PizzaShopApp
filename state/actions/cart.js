import ACTIONS from '../actions';

const updateCart = (item, cart) => (dispatch) => {
  const newCart = cart.concat(item);
  dispatch({type: ACTIONS.ADD_CART_ITEM, payload: newCart});
};

const deleteCart = (item, cart, index) => (dispatch) => {
  const newCart = cart.splice(index, 1);
  dispatch({type: ACTIONS.DELETE_CART_ITEM, payload: newCart});
};
export {updateCart, deleteCart};
