import { FETCH_PRODUCTS } from './actionTypes';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from './actionTypes';

import products from '../api/products';

//products actions

export const fetchProducts = () => async (dispatch) => {
  //get products data from third party api
  const res = await products.get('/products');

  //dispatch to reducers
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

//cart actions
export const addItem = (product) => {
  return { type: ADD_ITEM, payload: product };
};

export const increaseAmount = (id) => {
  return { type: INCREASE_AMOUNT, payload: id };
};

export const decreaseAmount = (cartItem) => {
  if (cartItem.amount === 1) {
    // remove the item if the next decrese will return an amount of 0
    return { type: REMOVE_ITEM, payload: cartItem.id };
  } else {
    return { type: DECREASE_AMOUNT, payload: cartItem.id };
  }
};

export const removeItem = (id) => {
  return { type: REMOVE_ITEM, payload: id };
};
