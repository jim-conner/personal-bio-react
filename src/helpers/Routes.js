import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import AddProject from '../App/components/forms/AddProject';
import ProjectsView from '../App/Views/Projects';
import PrivateRoute from './PrivateRoute';

function Routes({ admin, setProjects, projects }) {
  return (
    <div>
      <Switch>
        {/* <Route exact path='/'
          />}
        > */}
        {/* </Route> */}
        {/* <Route exact path='/bio'></Route> */}
        <Route exact path='/projects'
          component={() => <ProjectsView
            admin={admin}
            projects={projects}
            setProjects={setProjects}
          />}
        >
        </Route>
        {/* <Route exact path='/tech'></Route>
        <Route exact path='/contact'></Route> */}
{/*
        <PrivateRoute
          exact
          path='/admin'
        >
        </PrivateRoute> */}
        <PrivateRoute
          exact
          path='/admin'
          admin={admin}
          component={() => <AddProject
            // admin={admin}
            projects={projects}
            setProjects={setProjects}
          />}
        >
        </PrivateRoute>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default Routes;
