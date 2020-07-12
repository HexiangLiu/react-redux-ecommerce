import { LOADING_START, LOADING_END, FETCH_PRODUCTS } from './actionTypes';

import products from '../api/products';

//products actions
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_START });

  const res = await products.get('/products');
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
  dispatch({ type: LOADING_END });
};
