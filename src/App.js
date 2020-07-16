import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//style
import './App.scss';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Error from './pages/Error';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

//import private route
import PrivateRoute from './PrivateRoute';

//components
import Header from './components/Header';
import Alert from './components/Alert';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        {/* Restrict the acess to checkout page by creating a private route */}
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
