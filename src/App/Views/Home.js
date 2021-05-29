import React from 'react';
import PropTypes from 'prop-types';

import Bio from './Bio';
import ProjectsView from './Projects';
import Tech from './Tech';
import Contact from './Contact';

function Home({ admin, projects, setProjects }) {
  return (
    <div className='homeView' id='/'>
      {/* <h3>Projects</h3> */}
      <ProjectsView
        admin={admin}
        projects={projects}
        setProjects={setProjects}
      />
      <Bio/>
      <Tech/>
      <Contact/>
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default Home;
