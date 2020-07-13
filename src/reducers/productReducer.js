import { FETCH_PRODUCT } from '../actions/actionTypes';

export default function productReducer(state = null, action) {
  if (action.type === FETCH_PRODUCT) {
    return action.payload;
  } else {
    return state;
  }
}
