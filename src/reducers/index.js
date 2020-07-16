import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import totalReducer from './totalReducer';
import userReducer from './userReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  total: totalReducer,
  user: userReducer,
  alert: alertReducer,
});
