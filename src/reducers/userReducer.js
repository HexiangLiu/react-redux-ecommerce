import { LOG_IN, LOG_OUT } from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}
