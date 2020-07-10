import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section-error">
      <h1 className="heading--1">
        The page you're looking for can't be found.
      </h1>
      <Link to="/" className="btn btn-primary">
        back to home
      </Link>
    </section>
  );
};

export default Error;
