import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { register, login } from '../actions';

import './Login.scss';

// strapi function
const Login = ({ register, login }) => {
  const history = useHistory();

  // control input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // check if the user want to sign in or register
  const [isMember, setMember] = useState(true);

  //handle submit fucntion
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isMember) {
      login({ email, password });
    } else {
      register({ email, password, username });
    }
  };

  return (
    <section>
      <h1 className="heading--1">{isMember ? 'sign in' : 'register'}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            className="form-control__input"
            required
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-control__label" htmlFor="email">
            email
          </label>
        </div>
        <div className="form-control">
          <input
            className="form-control__input"
            required
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-control__label" htmlFor="password">
            password
          </label>
        </div>
        {!isMember && (
          <div className="form-control">
            <input
              className="form-control__input"
              required
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form-control__label" htmlFor="username">
              username
            </label>
          </div>
        )}

        <button type="submit" className="btn btn-primary form-control__btn">
          {isMember ? 'sign in' : 'submit'}
        </button>

        <p className="register">
          {isMember ? 'need to register' : 'go back to login'}
          <button
            type="button"
            className="register__btn"
            onClick={() => setMember(!isMember)}
          >
            click here
          </button>
        </p>
      </form>
    </section>
  );
};

export default connect(null, { register, login })(Login);
