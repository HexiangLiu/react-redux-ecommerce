import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import components
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';

//import action creator
import { fetchProducts } from '../actions';

const Home = ({ featuredProducts, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <section className="section-home">
        <Hero>
          <Link to="/products" className="btn btn-secondary">
            our products
          </Link>
        </Hero>
      </section>

      {featuredProducts.length === 0 ? (
        <Loading />
      ) : (
        <ProductList title="featured products" products={featuredProducts} />
      )}
    </>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    featuredProducts: products.filter((product) => product.featured === true),
  };
};

export default connect(mapStateToProps, { fetchProducts })(Home);
