import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import AddProject from '../App/components/forms/AddProject';
// import ProjectsView from '../App/Views/Projects';
import PrivateRoute from './PrivateRoute';
import Home from '../App/Views/Home';
// import SingleProject from '../App/Views/SingleProject';
// import Bio from '../App/Views/Bio';

function Routes({ admin, setProjects, projects }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
          component={() => <Home
            admin={admin}
            projects={projects}
            setProjects={setProjects}
          />}
        ></Route>
        {/* <Route
        exact
        path='/projects/:firebaseKey'
        component={SingleProject}
        >
        </Route> */}
        {/* <Route
          path='/projects'
          component={() => <ProjectsView
            // id='projects'
            admin={admin}
            projects={projects}
            setProjects={setProjects}
          />}
          > */}
        {/* </Route> */}

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
