import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});
