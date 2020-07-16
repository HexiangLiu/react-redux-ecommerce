import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, user }) => {
  return <Route render={() => (user ? children : <Redirect to="/login" />)} />;
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
