import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

//components
import EmptyCart from '../components/EmptyCart';

//action creator
import { showAlert, hideAlert } from '../actions';

import './Checkout.scss';

const Checkout = ({ cart, alert, total, showAlert, hideAlert }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    showAlert('Processing your payment...');

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    hideAlert();

    if (paymentMethod) {
      console.log(paymentMethod);
    } else {
      setError(error.message);
    }
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section>
      <h2 className="heading--1">checkout</h2>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="heading--4">
          order total : <span>{total}</span>
        </h3>
        <div className="form-control">
          <input
            className="form-control__input"
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className=" form-control__label">
            Enter your name
          </label>
        </div>
        <div className="instructions">
          <label htmlFor="card-element">Credit or Debit Cart</label>
          <p>
            Test using this credit card : <span>4242 4242 4242 4242</span>
            <br />
            enter any 5 digits for the zip code
            <br />
            enter any 3 digits for the CVC
          </p>
        </div>
        <div className="stripe">
          <CardElement />
          {error && <p className="checkout__alert">{error}</p>}
        </div>

        <div>
          {!name && (
            <p className="checkout__alert">please fill out name field</p>
          )}
          {alert.show === false && (
            <button
              type="submit"
              className="btn btn-primary form-control__btn"
              disabled={!stripe}
            >
              submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = ({ cart, alert, total }) => {
  return {
    cart,
    alert,
    total,
  };
};
export default connect(mapStateToProps, { showAlert, hideAlert })(Checkout);
