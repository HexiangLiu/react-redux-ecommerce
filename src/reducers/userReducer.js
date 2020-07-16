import { LOG_IN, LOG_OUT } from '../actions/actionTypes';

//// initialize user with localstorage
const initialState = JSON.parse(localStorage.getItem('user')) || null;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    case LOG_OUT:
      localStorage.setItem('user', null);
      return null;
    default:
      return state;
  }
}
