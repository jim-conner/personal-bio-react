import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/bio'></Route>
        <Route exact path='/projects'></Route>
        <Route exact path='/tech'></Route>
        <Route exact path='/contact'></Route>

        <PrivateRoute
          exact
          path='/admin'
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path='/admin-projects'
        >
        </PrivateRoute>
      </Switch>
    </div>
  );
}

Routes.propTypes = {

};

export default Routes;
