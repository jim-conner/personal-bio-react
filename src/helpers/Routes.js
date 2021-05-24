import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import AddProject from '../App/components/forms/AddProject';
import ProjectsView from '../App/Views/Projects';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/bio'></Route>
        <Route exact path='/projects'
          component={() => <ProjectsView/>}
        >
        </Route>
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
          component={() => <AddProject/>}
        >
        </PrivateRoute>
      </Switch>
    </div>
  );
}

Routes.propTypes = {

};

export default Routes;
