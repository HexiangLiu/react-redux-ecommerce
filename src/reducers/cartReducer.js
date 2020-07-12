import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from '../actions/actionTypes';

const increaseAmount = (state, id) =>
  state.map((item) => {
    return id === item.id ? { ...item, amount: item.amount + 1 } : item;
  });

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      // check if the item is already in the cart, if so then just increase the amount by 1
      if (state.find((item) => item.id === action.payload.id)) {
        return increaseAmount(state, action.payload.id);
      }
      return [...state, action.payload];

    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);

    case INCREASE_AMOUNT:
      return increaseAmount(state, action.payload);

    case DECREASE_AMOUNT:
      return state.map((item) => {
        return action.payload === item.id
          ? { ...item, amount: item.amount - 1 }
          : item;
      });

    default:
      return state;
  }
}
