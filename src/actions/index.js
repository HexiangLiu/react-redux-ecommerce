import { FETCH_PRODUCTS, FETCH_PRODUCT } from './actionTypes';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from './actionTypes';
import { LOG_IN, LOG_OUT } from './actionTypes';

// import configured axios instance
import strapi from '../api/strapi';

/****************products actions****************/

export const fetchProducts = () => async (dispatch) => {
  //get products data from third party api
  const res = await strapi.get('/products');

  //dispatch to reducers
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  // get product data from api;
  const res = await strapi.get(`/products/${id}`);

  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

/****************CART actions****************/
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

/****************USER actions****************/
export const register = ({ username, email, password }) => async (dispatch) => {
  try {
    const res = await strapi.post('/auth/local/register', {
      username,
      email,
      password,
    });

    const { jwt: token, user } = res.data;
    dispatch({ type: LOG_IN, payload: { token, user } });
  } catch (error) {
    console.log(error);
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const res = await strapi.post('/auth/local', {
      identifier: email,
      password,
    });

    const { jwt: token, user } = res.data;
    dispatch({ type: LOG_IN, payload: { token, user } });
  } catch (error) {
    alert('error');
  }
};

export const logout = () => {
  return { type: LOG_OUT };
};
