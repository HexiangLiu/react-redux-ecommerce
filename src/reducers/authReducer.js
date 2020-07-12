import { SIGN_IN, SING_OUT } from '../actions/actionTypes';

export default function authReducer(state = false, action) {
  if (action.type === SIGN_IN) {
    return true;
  } else if (action.type === SING_OUT) {
    return false;
  } else {
    return state;
  }
}
