import { SCROLL } from '../actions/actionTypes';

export default function scrollReducer(state = 0, action) {
  if (action.type === SCROLL) {
    return action.payload;
  }

  return state;
}
