import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Error from './pages/Error';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Error">
          <Error />
        </Route>
        <Route exact path="/Products">
          <Products />
        </Route>
        <Route exact path="/Products">
          <Products />
        </Route>
        <Route exact path="/ProductDetail/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>
        <Route exact path="/Checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
