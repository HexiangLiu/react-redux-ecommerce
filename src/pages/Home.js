import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';

const Home = () => {
  return (
    <section>
      <Hero>
        <Link to="/products" className="btn btn-secondary">
          our products
        </Link>
      </Hero>
    </section>
  );
};

export default Home;
