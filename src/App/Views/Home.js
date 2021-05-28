import React from 'react';
import PropTypes from 'prop-types';

import Bio from './Bio';
import ProjectsView from './Projects';

function Home({ admin, projects, setProjects }) {
  return (
    <div>
      <ProjectsView
        admin={admin}
        projects={projects}
        setProjects={setProjects}
      />
      <Bio/>
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default Home;
