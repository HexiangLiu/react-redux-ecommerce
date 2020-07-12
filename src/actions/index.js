import { FETCH_PRODUCTS } from './actionTypes';

import products from '../api/products';

//products actions
export const fetchProducts = () => async (dispatch) => {
  //get products data from third party api
  const res = await products.get('/products');

  //dispatch to reducers
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
