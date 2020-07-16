import { UPDATE_TOTAL } from '../actions/actionTypes';

const initialState = localStorage.getItem('total') || 0;

export default function totalReducer(state = initialState, action) {
  if (action.type === UPDATE_TOTAL) {
    localStorage.setItem('total', action.payload);
    return action.payload;
  }

  return state;
}
