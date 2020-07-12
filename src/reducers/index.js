import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  products: productsReducer,
  loading: loadingReducer,
});
