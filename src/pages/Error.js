import React from 'react';
import { Link } from 'react-router-dom';

import './Error.scss';

const Error = () => {
  return (
    <section>
      <div className="error">
        <h1 className="error__heading">
          The page you're looking for can't be found.
        </h1>
        <Link to="/" className="btn btn-primary">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
