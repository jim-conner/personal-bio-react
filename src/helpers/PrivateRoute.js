import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (allTheProps) => (admin
    ? (<Component {...allTheProps} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: allTheProps.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

export default PrivateRoute;
