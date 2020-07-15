import { SHOW_ALERT, HIDE_ALERT } from '../actions/actionTypes';

export default function alertReducer(
  state = { show: false, msg: '', type: '' },
  action
) {
  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      show: true,
      msg: action.payload.msg,
      type: action.payload.type,
    };
  }

  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      show: false,
    };
  }

  return state;
}
