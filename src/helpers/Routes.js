import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route exact path='/projects'>
        </Route>
        <Route exact path='/about'>
        </Route>
        <Route exact path='/tech'>
        </Route>
        <Route exact path='/contact'>
        </Route>

      </Switch>
    </div>
  );
}

// Routes.propTypes = {

// };

export default Routes;
