import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { connect } from 'react-redux';
import { increaseAmount, decreaseAmount, removeItem } from '../actions';

import './CartItem.scss';

const CartItem = ({ cartItem, increaseAmount, decreaseAmount, removeItem }) => {
  const {
    id,
    title,
    price,
    amount,
    image: { url },
  } = cartItem;

  return (
    <article className="cartItem">
      <img src={url} alt={title} className="cartItem__img" />

      <h4 className="cartItem__title">{title}</h4>
      <h5 className="cartItem__price">${price}</h5>
      <button
        type="button"
        className="btn btn-primary cartItem__remove"
        onClick={() => {
          removeItem(id);
        }}
      >
        remove
      </button>
      <div>
        <button
          className="cartItem__btn"
          type="button"
          onClick={() => increaseAmount(id)}
        >
          <FaAngleUp />
        </button>
        <p className="cartItem__amount">{amount}</p>
        <button
          className="cartItem__btn"
          type="button"
          onClick={() => decreaseAmount(cartItem)}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};

export default connect(null, { increaseAmount, decreaseAmount, removeItem })(
  CartItem
);
